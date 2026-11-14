const ALLOWED = new Set([
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
]);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (
    !process.env.SHIPPO_API_TOKEN ||
    !process.env.SHIPPING_FROM_ADDRESS_JSON ||
    !process.env.PICK_MAILER_JSON
  ) {
    return res.status(503).json({
      error: "Shipping is not configured yet.",
    });
  }

  try {
    const { address, quantity } = req.body || {};

    if (
      !address ||
      !ALLOWED.has(address.country) ||
      !address.street1 ||
      !address.city ||
      !address.zip ||
      !address.name ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 10
    ) {
      return res.status(400).json({
        error: "Please enter a valid destination and pack quantity (1–10).",
      });
    }

    const from = JSON.parse(process.env.SHIPPING_FROM_ADDRESS_JSON);

    const parcel = JSON.parse(process.env.PICK_MAILER_JSON);

    const totalOz =
      Number(parcel.mailer_weight_oz) +
      quantity * Number(parcel.three_picks_weight_oz);

    const length = Number(parcel.length_in);
    const width = Number(parcel.width_in);
    const height = Number(parcel.height_in);

    if (
      ![totalOz, length, width, height].every(
        (value) => Number.isFinite(value) && value > 0,
      )
    ) {
      return res.status(500).json({
        error: "Invalid package measurements in Vercel.",
      });
    }

    const payload = {
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
          length: String(length),
          width: String(width),
          height: String(height),
          distance_unit: "in",
          weight: String(totalOz),
          mass_unit: "oz",
        },
      ],
      async: false,
    };

    const upstream = await fetch("https://api.goshippo.com/shipments/", {
      method: "POST",
      headers: {
        Authorization: `ShippoToken ${process.env.SHIPPO_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await upstream.text();

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      result = {
        message: "Shippo returned a non-JSON response.",
      };
    }

    if (!upstream.ok) {
      console.error("Shippo rejected shipment:", {
        status: upstream.status,
        details: result,
      });

      // TEMPORARY DEBUGGING ONLY.
      // Remove details before accepting real orders.
      return res.status(502).json({
        error: `Shippo request failed (${upstream.status}).`,
        details: result,
      });
    }

    if (result.messages?.length) {
      console.warn("Shippo shipment messages:", result.messages);
    }

    const rates = (result.rates || [])
      .filter((rate) => rate.amount && rate.currency === "USD")
      .map((rate) => ({
        id: rate.object_id,
        provider: rate.provider,
        service: rate.servicelevel?.name || "Shipping",
        amount: rate.amount,
        currency: rate.currency,
        estimated_days: rate.estimated_days,
      }))
      .sort((a, b) => Number(a.amount) - Number(b.amount));

    return res.status(200).json({
      rates,
      // Temporary debugging for shipments with no rates.
      ...(rates.length === 0 ? { messages: result.messages || [] } : {}),
    });
  } catch (err) {
    console.error("Shipping function error:", err);

    return res.status(500).json({
      error: "Unable to calculate shipping. Check Vercel runtime logs.",
    });
  }
}
