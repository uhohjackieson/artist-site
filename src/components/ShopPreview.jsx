// ── Store setup ─────────────────────────────────────────────────────
// Paste a real storefront URL below (Shopify, Gumroad, Payhip, etc.)
// to activate the main "Visit Shop" button. Leave it blank and the
// button stays hidden instead of linking to a dead page.
const STORE_URL = ""; // e.g. "https://jaclynrose.myshopify.com"

// For each item, paste a real product/checkout link to make that card
// go live with a "Shop Now" button. Leave "link" blank to keep showing
// "Coming Soon". Digital items (tabs, backing tracks) work well on
// Gumroad or Payhip; merch works well with a Shopify Buy Button link.
const shopItems = [
  {
    title: "Guitar Tabs",
    description: "Downloadable tabs for covers, riffs, and lesson material.",
    link: "",
  },
  {
    title: "Backing Tracks",
    description: "Practice tracks for solos, riffs, and song sections.",
    link: "",
  },
  {
    title: "Merch",
    description: "Artist merch and limited drops coming soon.",
    link: "",
  },
  {
    title: "Lesson Packages",
    description: "Single lessons and bundled packages for guitar students.",
    link: "#contact",
  },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Shop
        </p>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            Tabs, tracks, merch, and lesson packages.
          </h2>

          <p className="text-zinc-400 max-w-md leading-relaxed">
            Guitar resources, digital downloads, and Jaclyn Rose merch.
          </p>
        </div>

        {STORE_URL && (
          <a
            href={STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 rounded-full bg-pink-600 px-8 py-4 font-black hover:bg-pink-500 transition"
          >
            Visit Shop
          </a>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {shopItems.map((item) => {
            const isLive = Boolean(item.link);
            const isAnchor = item.link.startsWith("#");

            return (
              <div
                key={item.title}
                className="group bg-zinc-950 border border-white/10 p-7 rounded-2xl hover:border-pink-500/60 transition flex flex-col"
              >
                <p
                  className={`uppercase tracking-[0.35em] text-[10px] font-bold ${
                    isLive ? "text-pink-400" : "text-zinc-500"
                  }`}
                >
                  {isLive ? "Available" : "Coming Soon"}
                </p>

                <h3 className="mt-5 text-2xl font-black group-hover:text-pink-400 transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {isLive && (
                  <a
                    href={item.link}
                    target={isAnchor ? undefined : "_blank"}
                    rel={isAnchor ? undefined : "noreferrer"}
                    className="mt-6 inline-block text-center rounded-full border border-pink-500/60 px-5 py-2.5 text-sm font-bold text-pink-400 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition"
                  >
                    {isAnchor ? "Get In Touch" : "Shop Now"}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
