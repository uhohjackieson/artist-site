export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-pink-400 font-semibold mb-3">Contact</p>

        <h2 className="text-4xl md:text-5xl font-black">
          Book lessons, collaborations, or music projects.
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Reach out for guitar lessons, live performances, brand collaborations,
          product demos, or sponsored content.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="mailto:your-email-here@gmail.com"
            className="bg-pink-600 hover:bg-pink-700 px-7 py-4 rounded-full font-bold transition"
          >
            Email Me
          </a>

          <a
            href="https://instagram.com/uhohjackieson"
            className="border border-white/20 hover:border-pink-500 hover:text-pink-400 px-7 py-4 rounded-full font-bold transition"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/@jaclynrose696"
            className="border border-white/20 hover:border-pink-500 hover:text-pink-400 px-7 py-4 rounded-full font-bold transition"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
