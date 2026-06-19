const stats = [
  {
    number: "100K+",
    label: "Video Views",
  },
  {
    number: "50+",
    label: "Live Performances",
  },
  {
    number: "5+",
    label: "Years Playing",
  },
  {
    number: "∞",
    label: "Guitar Obsession",
  },
];

export default function Stats() {
  return (
    <section className="bg-zinc-950 text-white px-6 py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-pink-500">
              {stat.number}
            </h3>

            <p className="mt-3 text-gray-400 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
