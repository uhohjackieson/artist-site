import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-32 bg-[#101014] border-t border-white/10 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
            Contact
          </p>
          <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.1] mt-4 text-[clamp(2rem,5vw,3.4rem)]">
            Let's Work Together
          </h2>
          <p className="text-[#8f8f9c] leading-[1.8] max-w-[36rem] mx-auto mt-5">
            Available for guitar lessons, live performances, brand
            collaborations, content creation, and music-related projects.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap justify-center gap-3 mt-9">
            <a
              href="mailto:thejaclynrose@gmail.com?subject=Website%20Inquiry"
              className="inline-flex items-center rounded-full bg-gradient-to-br from-[#d18ce8] to-[#b75fd0] text-[#0a0a0d] px-8 py-4 text-[0.85rem] font-semibold hover:from-[#e0a6f2] hover:to-[#c977e0] transition-all"
            >
              Email Me
            </a>
            <a
              href="https://instagram.com/uhohjackieson"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-[0.85rem] font-semibold hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@jaclynrose696"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-[0.85rem] font-semibold hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
            >
              YouTube
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-11">
            <span className="block text-[0.64rem] font-semibold tracking-[0.32em] uppercase text-[#8f8f9c]">
              Direct Email
            </span>
            <a
              href="mailto:thejaclynrose@gmail.com"
              className="block mt-3 font-semibold text-[1.25rem] tracking-[-0.01em] hover:text-[#d18ce8] transition-colors"
            >
              thejaclynrose@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
