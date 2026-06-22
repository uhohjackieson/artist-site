const lessons = [
  "Beginner-friendly instruction",
  "Electric & acoustic guitar",
  "Learn songs you actually love",
  "Chords, riffs, rhythm & technique",
  "Rock, metal, pop-punk & pop",
];

export default function Lessons() {
  return (
    <section id="lessons" className="bg-zinc-950 text-white px-6 py-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-pink-400 uppercase tracking-[0.45em] text-xs font-semibold">
            Guitar Lessons
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">
            Learn Guitar With Confidence.
          </h2>

          <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-xl">
            Whether you're picking up a guitar for the first time or looking to
            improve your skills, lessons are tailored to your goals, favorite
            music, and experience level.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-pink-600 hover:bg-pink-500 px-8 py-4 rounded-full font-black transition"
            >
              Book a Lesson
            </a>

            <a
              href="#videos"
              className="border border-white/20 hover:border-pink-400 px-8 py-4 rounded-full font-black transition"
            >
              Watch Performances
            </a>
          </div>
        </div>

        <div className="bg-black/40 border border-white/10 p-10 rounded-2xl">
          <p className="text-pink-400 uppercase tracking-[0.35em] text-[11px] font-bold mb-8">
            What You'll Learn
          </p>

          <ul className="space-y-6">
            {lessons.map((lesson) => (
              <li
                key={lesson}
                className="text-lg text-zinc-200 border-b border-white/5 pb-4"
              >
                {lesson}
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-zinc-400">
              Online and in-person lessons available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
