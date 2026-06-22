import SectionReveal from "./SectionReveal";

const video = {
  title: "Whole Lotta Love Solo",
  subtitle: "Led Zeppelin Cover",
  embed: "https://www.youtube.com/embed/HWM9DRh3sgU?si=Jp8IkMvdz3b3qWt1",
};

export default function Videos() {
  return (
    <section id="videos" className="bg-black text-white px-6 py-36 md:py-44">
      <SectionReveal className="max-w-4xl mx-auto">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Featured Performance
        </p>

        <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              {video.title}
            </h2>
            <p className="mt-4 text-xl text-zinc-400">{video.subtitle}</p>
          </div>

          <a
            href="https://youtube.com/@jaclynrose696"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-400 hover:text-pink-400 transition"
          >
            View More →
          </a>
        </div>

        <div className="mt-14 overflow-hidden rounded-xl shadow-2xl bg-zinc-950">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={video.embed}
              title={video.title}
              allowFullScreen
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
