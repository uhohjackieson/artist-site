const services = [
  {
    title: "Guitar Lessons",
    description:
      "Personalized online and in-person lessons for beginners and developing players.",
  },
  {
    title: "Live Performances",
    description:
      "Available for events, showcases, and live music opportunities.",
  },
  {
    title: "Brand Collaborations",
    description:
      "Partnering with music, gear, and lifestyle brands through content creation.",
  },
  {
    title: "Content Creation",
    description:
      "Short-form guitar content, product demos, and social media campaigns.",
  },
];

export default function WorkWithMe() {
  return (
    <section id="work" className="bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Work With Me
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight max-w-3xl">
          Music, content, and creative collaborations.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-white/10 p-8 rounded-2xl hover:border-pink-500/50 transition"
            >
              <h3 className="text-2xl font-black">{service.title}</h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block mt-12 bg-pink-600 hover:bg-pink-500 px-8 py-4 rounded-full font-black transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
