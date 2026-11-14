import { useState } from 'react';
import Reveal from './Reveal';

const PRODUCT = { name: 'Jaclyn Rose Signature Guitar Picks — 3 Pack', price: 4.99 };

export default function ShopPreview() {
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({ name: '', street1: '', city: '', state: '', zip: '', country: 'US' });
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function quote(e) {
    e.preventDefault();
    setError(''); setRates([]); setSelectedRate(''); setLoading(true);
    try {
      const response = await fetch('/api/shipping-quote', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, quantity })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not retrieve shipping rates.');
      setRates(data.rates || []);
      if (!(data.rates || []).length) setError('No shipping rates available for this address.');
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  const field = 'w-full bg-[#0a0a0d] border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-[#777] focus:outline-none focus:border-[#b75fd0]';
  const update = (key) => (e) => setAddress(prev => ({ ...prev, [key]: e.target.value }));
  return <section id="shop" className="py-28 md:py-32 border-y border-white/10">
    <div className="max-w-6xl mx-auto px-6">
      <Reveal><p className="text-[#b75fd0] uppercase tracking-[.3em] text-xs font-semibold">Official merch</p>
      <h2 className="text-3xl md:text-5xl font-semibold uppercase mt-4">The Shop</h2>
      <p className="text-[#b6b6c2] mt-4">Signature picks today. More guitar merch coming soon.</p></Reveal>
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <div className="rounded-2xl border border-white/10 bg-[#101014] p-8">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-[#291735] to-[#101014] flex items-center justify-center text-[#d18ce8] text-center px-6">Add your actual guitar pick product photo here</div>
          <h3 className="text-xl font-semibold mt-7">{PRODUCT.name}</h3>
          <p className="text-[#b6b6c2] mt-3">Three matching custom-designed signature guitar picks per pack.</p>
          <p className="text-2xl font-semibold text-[#d18ce8] mt-5">${PRODUCT.price.toFixed(2)} <span className="text-sm text-[#b6b6c2]">per pack, plus shipping and applicable tax</span></p>
          <label className="block mt-6 text-sm" htmlFor="pick-quantity">Number of packs</label>
          <select id="pick-quantity" className={`${field} mt-2`} value={quantity} onChange={e => { setQuantity(Number(e.target.value)); setRates([]); setSelectedRate(''); }}>
            {Array.from({length: 10}, (_,i) => i+1).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <form onSubmit={quote} className="rounded-2xl border border-white/10 bg-[#101014] p-8 space-y-4">
          <h3 className="text-xl font-semibold">Estimate shipping</h3>
          <p className="text-[#b6b6c2] text-sm">Enter the destination to request live carrier quotes. No payment will be taken yet.</p>
          <input required className={field} placeholder="Full name" value={address.name} onChange={update('name')} />
          <input required className={field} placeholder="Street address" value={address.street1} onChange={update('street1')} />
          <div className="grid grid-cols-2 gap-3">
            <input required className={field} placeholder="City" value={address.city} onChange={update('city')} />
            <input className={field} placeholder="State / province" value={address.state} onChange={update('state')} />
            <input required className={field} placeholder="Postal code" value={address.zip} onChange={update('zip')} />
            <select className={field} value={address.country} onChange={update('country')}>
              {['US','CA','GB','AU','DE','FR','IT','ES','NL','BE','IE','SE','DK','PL'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <button disabled={loading} type="submit" className="w-full rounded-full bg-[#b75fd0] text-[#0a0a0d] font-semibold px-6 py-3 disabled:opacity-60">{loading ? 'Calculating…' : 'Calculate shipping'}</button>
          {error && <p role="alert" className="text-red-300 text-sm">{error}</p>}
          {rates.length > 0 && <div className="space-y-2"><p className="font-semibold">Available shipping options</p>{rates.map(r => <label key={r.id} className="flex gap-3 items-center border border-white/15 rounded-lg p-3"><input type="radio" name="shipping-rate" checked={selectedRate===r.id} onChange={()=>setSelectedRate(r.id)} /><span className="flex-1">{r.provider} — {r.service}</span><span>${r.amount} {r.currency}</span></label>)}</div>}
          <p className="text-[#b6b6c2] text-xs">Checkout is intentionally disabled until Stripe is securely connected and the shipping address and rate are revalidated on the server.</p>
        </form>
      </div>
    </div>
  </section>;
}
