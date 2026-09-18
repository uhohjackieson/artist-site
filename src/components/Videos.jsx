import Reveal from "./Reveal";

const video = {
  title: "Metallica",
  embed: "https://www.youtube.com/embed/tP7IPOTldEs",
};

export default function Videos() {
  return (
    <section id="videos" className="py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-[44rem] mb-14">
          <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
            Featured Performance
          </p>
          <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.14] mt-4 text-[clamp(1.9rem,4.2vw,2.9rem)]">
            {video.title}
          </h2>
          <p className="text-[#8f8f9c] leading-[1.85] mt-5 text-[1.02rem]">
            Metallica cover, recorded live. More covers, riffs, and lesson clips
            over on YouTube.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl overflow-hidden bg-black shadow-[0_26px_60px_rgba(0,0,0,.5)]">
            <iframe
              src={video.embed}
              title={video.title}
              allowFullScreen
              loading="lazy"
              className="block w-full aspect-video border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9">
            <a
              href="https://youtube.com/@jaclynrose696"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-[0.85rem] font-semibold hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
            >
              More Videos →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
