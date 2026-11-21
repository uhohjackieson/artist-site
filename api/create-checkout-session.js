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

const ORIGIN = "https://jaclynroseguitar.com";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  // Keep live payments disabled until setup is complete.
  if (process.env.ENABLE_LIVE_CHECKOUT !== "true") {
    return res.status(503).json({
      error: "Live checkout is not enabled yet.",
    });
  }

  const key = process.env.STRIPE_SECRET_KEY || "";

  if (!key.startsWith("sk_live_") && !key.startsWith("rk_live_")) {
    return res.status(503).json({
      error: "A live Stripe API key is required.",
    });
  }

  if (!process.env.STRIPE_PRICE_ID || !process.env.SHIPPO_API_TOKEN) {
    return res.status(503).json({
      error: "Checkout configuration is incomplete.",
    });
  }

  try {
    const { address, quantity, rateId } = req.body || {};

    if (
      !address ||
      !COUNTRIES.includes(address.country) ||
      !address.name?.trim() ||
      !address.street1?.trim() ||
      !address.city?.trim() ||
      !address.zip?.trim() ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10 ||
      typeof rateId !== "string" ||
      !rateId
    ) {
      return res.status(400).json({
        error: "Please enter a valid address, quantity, and shipping option.",
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

    if (
      !Number.isFinite(oz) ||
      oz <= 0 ||
      dims.some((n) => !Number.isFinite(n) || n <= 0)
    ) {
      throw new Error("Invalid parcel configuration");
    }

    const destination = {
      name: address.name.trim(),
      street1: address.street1.trim(),
      street2: (address.street2 || "").trim(),
      city: address.city.trim(),
      state: (address.state || "").trim(),
      zip: address.zip.trim(),
      country: address.country,
    };

    const shipment = {
      address_from: from,
      address_to: destination,
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

    if (!shippoResponse.ok) {
      return res.status(502).json({
        error: "Unable to verify shipping rate.",
      });
    }

    const shippo = await shippoResponse.json();

    const selected = (shippo.rates || []).find(
      (r) =>
        `${r.provider}:${r.servicelevel?.token || r.servicelevel?.name || ""}` ===
          rateId &&
        r.currency === "USD" &&
        Number.isFinite(Number(r.amount)) &&
        Number(r.amount) > 0,
    );

    if (!selected) {
      return res.status(409).json({
        error: "Shipping option unavailable. Calculate shipping again.",
      });
    }

    const shippingCents = Math.round(Number(selected.amount) * 100);

    const stripe = new Stripe(key);

    const price = await stripe.prices.retrieve(process.env.STRIPE_PRICE_ID);

    // $5.00 per three-pack
    if (
      !price.active ||
      price.currency !== "usd" ||
      price.unit_amount !== 500 ||
      price.type !== "one_time"
    ) {
      return res.status(503).json({
        error: "Stripe price must be an active one-time $5.00 USD price.",
      });
    }

    // The shipping address cannot be changed in Stripe
    // after Shippo calculates the shipping cost.
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity,
        },
      ],
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: shippingCents,
              currency: "usd",
            },
            display_name: `${selected.provider} - ${selected.servicelevel?.name || "Shipping"}`,
          },
        },
      ],
      customer_creation: "always",
      metadata: {
        quoted_country: destination.country,
        quoted_zip: destination.zip,
        quoted_city: destination.city,
        quoted_state: destination.state,
        quoted_street1: destination.street1,
        quoted_street2: destination.street2,
        quoted_name: destination.name,
        quantity: String(quantity),
        shipping_rate_id: rateId,
        shipping_amount_cents: String(shippingCents),
      },
      success_url: `${ORIGIN}/?checkout=success&session_id={CHECKOUT_SESSION_ID}#shop`,
      cancel_url: `${ORIGIN}/?checkout=cancel#shop`,
    });

    return res.status(200).json({
      url: session.url,
    });
  } catch (err) {
    console.error("Checkout creation failed:", err?.message);

    return res.status(500).json({
      error: "Could not start checkout.",
    });
  }
}
