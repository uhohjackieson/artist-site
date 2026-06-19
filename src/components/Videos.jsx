const videos = [
  {
    title: "Guitar Cover",
    description: "High-energy rock and pop-punk guitar performance.",
    embed: "https://www.youtube.com/embed/HWM9DRh3sgU?si=Jp8IkMvdz3b3qWt1",
  },
  // {
  //   title: "Live Performance",
  //   description: "Clips from live shows, rehearsals, and band performances.",
  //   embed: "https://www.youtube.com/embed/VIDEO_ID",
  // },
  // {
  //   title: "Guitar Content",
  //   description: "Short-form videos, riffs, tones, and creative music content.",
  //   embed: "https://www.youtube.com/embed/VIDEO_ID",
  // },
];

export default function Videos() {
  return (
    <section id="videos" className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <p className="text-pink-400 font-semibold mb-3">Videos</p>

        <h2 className="text-4xl md:text-5xl font-black max-w-3xl">
          Watch the latest guitar covers, clips, and performances.
        </h2>

        {/* <div className="grid md:grid-cols-3 gap-6 mt-14"> */}
        <div className="max-w-4xl mx-auto mt-14">
          {videos.map((video) => (
            <div
              key={video.title}
              className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-pink-500 transition"
            >
              <div className="aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={video.embed}
                  title={video.title}
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{video.title}</h3>
                <p className="text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
