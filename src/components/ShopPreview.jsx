import Reveal from "./Reveal";

// ── Your Shopify store ──────────────────────────────────────
const STORE_URL = "https://djipzx-fz.myshopify.com/";

// Swap any "link" for a direct product URL to send buyers straight
// to that item. Leaving it as STORE_URL sends them to the store home.
const shopItems = [
  {
    title: "Guitar Tabs",
    description: "Downloadable tabs for covers, riffs, and lesson material.",
    link: STORE_URL,
  },
  {
    title: "Backing Tracks",
    description: "Practice tracks for solos, riffs, and song sections.",
    link: STORE_URL,
  },
  {
    title: "Merch",
    description: "Artist merch and limited drops from the store.",
    link: STORE_URL,
  },
  {
    title: "Lesson Packages",
    description: "Single lessons and bundled packages for guitar students.",
    link: "#lessons",
  },
];

export default function ShopPreview() {
  return (
    <section id="shop" className="py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-[44rem] mx-auto text-center mb-14">
          <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
            Store
          </p>
          <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.14] mt-4 text-[clamp(1.9rem,4.2vw,2.9rem)]">
            Tabs, Tracks, Merch &amp; More.
          </h2>
          <p className="text-[#8f8f9c] leading-[1.85] mt-5 text-[1.02rem]">
            Guitar resources, digital downloads, and Jaclyn Rose merch.
          </p>
          <div className="mt-8">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-[#d18ce8] to-[#b75fd0] text-[#0a0a0d] px-8 py-4 text-[0.85rem] font-semibold hover:from-[#e0a6f2] hover:to-[#c977e0] transition-all"
            >
              Visit Store
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {shopItems.map((item) => {
              const isAnchor = item.link.startsWith("#");
              return (
                <div
                  key={item.title}
                  className="flex flex-col bg-[#101014] border border-white/10 rounded-2xl p-7 transition-all hover:border-[#b75fd0]/50 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#b75fd0]/10 hover:to-[#101014]"
                >
                  <span className="text-[0.58rem] font-bold tracking-[0.3em] uppercase text-[#9a4bb5]">
                    Available
                  </span>
                  <h3 className="font-semibold uppercase tracking-[0.04em] text-[1.1rem] mt-4">
                    {item.title}
                  </h3>
                  <p className="text-[#8f8f9c] text-[0.9rem] leading-[1.68] mt-3 grow">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target={isAnchor ? undefined : "_blank"}
                    rel={isAnchor ? undefined : "noreferrer"}
                    className="mt-6 text-center rounded-full border border-[#b75fd0]/45 text-[#d18ce8] px-4 py-3 text-[0.74rem] font-semibold hover:bg-[#b75fd0] hover:text-white hover:border-[#b75fd0] transition-all"
                  >
                    {isAnchor ? "Get In Touch" : "Shop Now"}
                  </a>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
