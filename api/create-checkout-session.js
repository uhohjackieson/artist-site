import Stripe from "stripe";

const COUNTRIES = [
  "US",
  "CA",
  "GB",
  "AU",
  "DE",
  "FR",
  "IT",
  "ES",
  "NL",
  "BE",
  "IE",
  "SE",
  "DK",
  "PL",
];

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  // Intentionally test-only. Do not enable real payments before webhook, tax, and shipping review.
  if (
    process.env.ENABLE_TEST_CHECKOUT !== "true" ||
    !process.env.STRIPE_SECRET_KEY?.startsWith("sk_test_") ||
    !process.env.SHIPPO_API_TOKEN?.startsWith("shippo_test_")
  ) {
    return res.status(503).json({
      error: "Test checkout is not enabled. Use Stripe and Shippo test keys.",
    });
  }
  try {
    const { address, quantity, rateId } = req.body || {};
    if (
      !address ||
      !COUNTRIES.includes(address.country) ||
      !address.name ||
      !address.street1 ||
      !address.city ||
      !address.zip ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10 ||
      typeof rateId !== "string" ||
      !rateId
    ) {
      return res.status(400).json({
        error: "Please enter a valid address, quantity and shipping option.",
      });
    }
    const from = JSON.parse(process.env.SHIPPING_FROM_ADDRESS_JSON);
    const mailer = JSON.parse(process.env.PICK_MAILER_JSON);
    const oz =
      Number(mailer.mailer_weight_oz) +
      quantity * Number(mailer.three_picks_weight_oz);
    const dims = [mailer.length_in, mailer.width_in, mailer.height_in].map(
      Number,
    );
    if (!(oz > 0) || dims.some((n) => !Number.isFinite(n) || n <= 0))
      throw new Error("Invalid parcel configuration");
    const shipment = {
      address_from: from,
      address_to: {
        name: address.name,
        street1: address.street1,
        city: address.city,
        state: address.state || "",
        zip: address.zip,
        country: address.country,
      },
      parcels: [
        {
          length: String(dims[0]),
          width: String(dims[1]),
          height: String(dims[2]),
          distance_unit: "in",
          weight: String(oz),
          mass_unit: "oz",
        },
      ],
      async: false,
    };
    const shippoResponse = await fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        Authorization: `ShippoToken ${process.env.SHIPPO_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shipment),
    });
    if (!shippoResponse.ok)
      return res.status(502).json({ error: "Unable to verify shipping rate." });
    const shippo = await shippoResponse.json();
    const selected = (shippo.rates || []).find(
      (r) =>
        `${r.provider}:${r.servicelevel?.token || r.servicelevel?.name || ""}` ===
          rateId &&
        r.currency === "USD" &&
        r.amount &&
        Number(r.amount) > 0,
    );
    // Shippo generates new object IDs per quote. Match carrier/service and use the FRESH server price.
    if (!selected)
      return res.status(409).json({
        error: "Shipping option unavailable. Calculate shipping again.",
      });
    const shippingCents = Math.round(Number(selected.amount) * 100);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_ID);
    if (
      !price.active ||
      price.currency !== "usd" ||
      price.unit_amount !== 499 ||
      price.type !== "one_time"
    ) {
      return res.status(503).json({
        error: "Stripe price must be an active one-time $4.99 USD price.",
      });
    }
    const origin = "https://jaclynroseguitar.com";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity }],
      shipping_address_collection: { allowed_countries: [address.country] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: shippingCents, currency: "usd" },
            display_name: `${selected.provider} — ${selected.servicelevel?.name || "Shipping"}`,
          },
        },
      ],
      customer_creation: "always",
      metadata: {
        quoted_country: address.country,
        quoted_zip: address.zip,
        quoted_city: address.city,
        quoted_state: address.state || "",
        quoted_street1: address.street1,
        quoted_name: address.name,
        quantity: String(quantity),
        shipping_rate_id: rateId,
        shipping_amount_cents: String(shippingCents),
      },
      success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}#shop`,
      cancel_url: `${origin}/?checkout=cancel#shop`,
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Checkout creation failed:", err?.message);
    return res.status(500).json({ error: "Could not start test checkout." });
  }
}
