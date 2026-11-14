// Vercel Node.js function. Shippo secret key must be configured on Vercel.
const ALLOWED = new Set(['US','CA','GB','AU','DE','FR','IT','ES','NL','BE','IE','SE','DK','PL']);
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.SHIPPO_API_TOKEN || !process.env.SHIPPING_FROM_ADDRESS_JSON || !process.env.PICK_MAILER_JSON)
    return res.status(503).json({ error: 'Shipping is not configured yet.' });
  try {
    const { address, quantity } = req.body || {};
    if (!address || !ALLOWED.has(address.country) || !address.street1 || !address.city || !address.zip || !address.name || !Number.isInteger(quantity) || quantity < 1 || quantity > 10)
      return res.status(400).json({ error: 'Please enter a valid destination and pack quantity (1–10).' });
    const from = JSON.parse(process.env.SHIPPING_FROM_ADDRESS_JSON);
    const parcel = JSON.parse(process.env.PICK_MAILER_JSON);
    // Weight must include the mailer and 3 picks per pack. Replace with measured weights.
    const totalOz = Number(parcel.mailer_weight_oz) + quantity * Number(parcel.three_picks_weight_oz);
    if (!(totalOz > 0)) throw new Error('Invalid package weight configuration');
    const payload = {
      address_from: from,
      address_to: { name: address.name, street1: address.street1, city: address.city, state: address.state, zip: address.zip, country: address.country },
      parcels: [{ length: String(parcel.length_in), width: String(parcel.width_in), height: String(parcel.height_in), distance_unit: 'in', weight: String(totalOz), mass_unit: 'oz' }],
      async: false
    };
    const upstream = await fetch('https://api.goshippo.com/shipments/', { method: 'POST', headers: { Authorization: `ShippoToken ${process.env.SHIPPO_API_TOKEN}`, 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const result = await upstream.json();
    if (!upstream.ok) return res.status(502).json({ error: 'Shipping provider could not calculate rates.' });
    const rates = (result.rates || []).filter(r => r.amount && r.currency === 'USD').map(r => ({ id: r.object_id, provider: r.provider, service: r.servicelevel?.name || 'Shipping', amount: r.amount, currency: r.currency, estimated_days: r.estimated_days })).sort((a,b) => Number(a.amount)-Number(b.amount));
    return res.status(200).json({ rates });
  } catch (err) { return res.status(500).json({ error: 'Unable to calculate shipping. Please check your setup.' }); }
}
