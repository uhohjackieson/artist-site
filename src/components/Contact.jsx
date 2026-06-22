export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Contact
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
          Let's Work Together
        </h2>

        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
          Available for guitar lessons, live performances, brand collaborations,
          content creation, and music-related projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="mailto:thejaclynrose@gmail.com?subject=Website Inquiry"
            className="bg-pink-600 hover:bg-pink-500 px-8 py-4 rounded-full font-black transition"
          >
            Email Me
          </a>

          <a
            href="https://instagram.com/uhohjackieson"
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 hover:border-pink-500 px-8 py-4 rounded-full font-black transition"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/@jaclynrose696"
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 hover:border-pink-500 px-8 py-4 rounded-full font-black transition"
          >
            YouTube
          </a>
        </div>

        <div className="mt-12">
          <p className="text-zinc-500 text-sm uppercase tracking-[0.3em]">
            Direct Email
          </p>

          <a
            href="mailto:thejaclynrose@gmail.com"
            className="mt-3 inline-block text-xl md:text-2xl font-semibold hover:text-pink-400 transition"
          >
            thejaclynrose@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
