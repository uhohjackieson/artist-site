const shopItems = [
  {
    title: "Guitar Tabs",
    description: "Downloadable tabs for covers, riffs, and lesson material.",
  },
  {
    title: "Backing Tracks",
    description: "Practice tracks for solos, riffs, and song sections.",
  },
  {
    title: "Merch",
    description: "Artist merch and limited drops coming soon.",
  },
  {
    title: "Lesson Packages",
    description: "Single lessons and bundled packages for guitar students.",
  },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <a
          href="https://YOUR-SHOPIFY-STORE.myshopify.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 rounded-full bg-pink-600 px-8 py-4 font-black hover:bg-pink-500 transition"
        >
          Visit Shop
        </a>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
            Tabs, tracks, merch, and lesson packages.
          </h2>

          <p className="text-zinc-400 max-w-md leading-relaxed">
            A future home for guitar resources, digital downloads, and Jaclyn
            Rose merch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {shopItems.map((item) => (
            <div
              key={item.title}
              className="group bg-zinc-950 border border-white/10 p-7 rounded-2xl hover:border-pink-500/60 transition"
            >
              <p className="text-pink-400 uppercase tracking-[0.35em] text-[10px] font-bold">
                Coming Soon
              </p>

              <h3 className="mt-5 text-2xl font-black group-hover:text-pink-400 transition">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
