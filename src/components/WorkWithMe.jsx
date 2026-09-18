import Reveal from "./Reveal";

const services = [
  {
    title: "Guitar Lessons",
    description:
      "Personalized online and in-person lessons for beginners and developing players.",
  },
  {
    title: "Live Performances",
    description: "Available for events, showcases, and live music opportunities.",
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
    <section
      id="work"
      className="py-28 md:py-32 bg-[#101014] border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-[44rem] mb-14">
          <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
            Work With Me
          </p>
          <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.14] mt-4 text-[clamp(1.9rem,4.2vw,2.9rem)]">
            Music, content, and collaborations.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="h-full bg-[#0a0a0d] border border-white/10 rounded-2xl p-8 transition-all hover:border-[#b75fd0]/45 hover:bg-gradient-to-br hover:from-[#b75fd0]/12 hover:to-[#0a0a0d]">
                <h3 className="font-semibold uppercase tracking-[0.04em] text-[1.1rem]">
                  {service.title}
                </h3>
                <p className="text-[#8f8f9c] leading-[1.72] text-[0.94rem] mt-3">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
