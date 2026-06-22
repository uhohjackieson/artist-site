const video = {
  title: "Whole Lotta Love Solo",
  subtitle: "Led Zeppelin Cover",
  embed: "https://www.youtube.com/embed/HWM9DRh3sgU?si=Jp8IkMvdz3b3qWt1",
};

export default function Videos() {
  return (
    <section id="videos" className="bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
          Featured Performance
        </p>

        <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
          {video.title}
        </h2>

        <p className="mt-4 text-xl text-zinc-400">{video.subtitle}</p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={video.embed}
              title={video.title}
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-zinc-400 max-w-xl">
            A guitar cover performance inspired by one of Led Zeppelin's most
            iconic tracks.
          </p>

          <a
            href="https://youtube.com/@jaclynrose696"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold uppercase tracking-[0.25em] text-pink-400 hover:text-white transition"
          >
            View More Videos →
          </a>
        </div>
      </div>
    </section>
  );
}
