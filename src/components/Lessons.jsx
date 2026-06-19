const lessons = [
  "Beginner guitar",
  "Electric & acoustic",
  "Learn your favorite songs",
  "Chords, strumming, riffs",
  "Rock, pop-punk, metal, and pop",
];

export default function Lessons() {
  return (
    <section id="lessons" className="bg-zinc-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-pink-400 font-semibold mb-3">Lessons</p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Learn guitar in a fun, song-based way.
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I offer personalized guitar lessons for beginners and growing
            players who want to build confidence, learn songs they love, and
            actually enjoy practicing.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 bg-pink-600 hover:bg-pink-700 px-7 py-4 rounded-full font-bold transition"
          >
            Book a Lesson
          </a>
        </div>

        <div className="bg-black border border-white/10 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6">What I Teach</h3>

          <ul className="space-y-4">
            {lessons.map((lesson) => (
              <li key={lesson} className="text-gray-300 text-lg">
                ✦ {lesson}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
