import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readRawBody(req) {
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey || !webhookSecret) {
    console.error("Stripe webhook configuration missing");

    return res.status(503).json({
      error: "Webhook is not configured",
    });
  }

  const stripe = new Stripe(secretKey);
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    const rawBody = await readRawBody(req);

    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook verification failed:", error.message);

    return res.status(400).json({
      error: "Invalid webhook signature",
    });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.payment_status === "paid") {
      // Verification only for now.
      // TODO: Save order to persistent storage.
      // TODO: Prevent duplicate fulfillment.
      // TODO: Notify store owner.
      console.log("Verified paid checkout session:", session.id);
    }
  }

  return res.status(200).json({
    received: true,
  });
}
