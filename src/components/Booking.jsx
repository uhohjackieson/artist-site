import { useState } from "react";
import Reveal from "./Reveal";

const lessons = [
  "Beginner-friendly instruction",
  "Electric & acoustic guitar",
  "Learn songs you actually love",
  "Chords, riffs, rhythm & technique",
  "Rock, metal, pop-punk & pop",
];

const EMAIL = "thejaclynrose@gmail.com";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    level: "Total beginner",
    goals: "",
    availability: "",
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Experience Level: ${form.level}\n` +
      `Wants to learn: ${form.goals || "—"}\n` +
      `Availability: ${form.availability || "—"}`;

    window.location.href =
      `mailto:${EMAIL}?subject=` +
      encodeURIComponent(`Lesson Request from ${form.name}`) +
      `&body=` +
      encodeURIComponent(body);
  };

  const fieldClass =
    "w-full bg-[#0c0c10] border border-white/10 rounded-[11px] px-4 py-3.5 text-[0.96rem] text-white placeholder:text-[#4d4d58] focus:outline-none focus:border-[#b75fd0] focus:ring-[3px] focus:ring-[#b75fd0]/15 transition";
  const labelClass =
    "block text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-[#b6b6c2] mb-2.5";

  return (
    <section
      id="lessons"
      className="py-28 md:py-32 bg-[#101014] border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-[44rem] mb-13">
          <p className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]">
            Guitar Lessons
          </p>
          <h2 className="font-semibold uppercase tracking-[0.02em] leading-[1.14] mt-4 text-[clamp(1.9rem,4.2vw,2.9rem)]">
            Learn Guitar With Confidence.
          </h2>
          <p className="text-[#8f8f9c] leading-[1.85] mt-5 text-[1.02rem]">
            Whether you're picking up a guitar for the first time or looking to
            improve your skills, lessons are tailored to your goals, favorite
            music, and experience level.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <ul className="border-t border-white/10">
              {lessons.map((lesson, i) => (
                <li
                  key={lesson}
                  className="flex gap-4.5 items-baseline py-4.5 border-b border-white/10 text-[1rem] font-medium text-[#b6b6c2] hover:text-[#d18ce8] hover:pl-2 transition-all"
                >
                  <span className="text-[0.62rem] tracking-[0.24em] text-[#9a4bb5] font-bold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {lesson}
                </li>
              ))}
            </ul>
            <p className="text-[#8f8f9c] text-[0.9rem] mt-7">
              Online and in-person lessons available.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="bg-[#16161b] border border-white/10 rounded-[18px] p-9"
            >
              <h3 className="font-semibold uppercase tracking-[0.05em] text-[1.15rem]">
                Request a Lesson
              </h3>
              <p className="text-[#8f8f9c] text-[0.85rem] leading-[1.7] mt-2.5">
                Fill this in and it'll open your email app with everything ready
                to send.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                <div>
                  <label className={labelClass} htmlFor="bn">
                    Your Name
                  </label>
                  <input
                    id="bn"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Doe"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="be">
                    Email
                  </label>
                  <input
                    id="be"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jane@email.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className={labelClass} htmlFor="bl">
                    Experience Level
                  </label>
                  <select
                    id="bl"
                    value={form.level}
                    onChange={set("level")}
                    className={fieldClass}
                  >
                    <option>Total beginner</option>
                    <option>Some experience</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="ba">
                    Availability
                  </label>
                  <input
                    id="ba"
                    value={form.availability}
                    onChange={set("availability")}
                    placeholder="Evenings, weekends..."
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className={labelClass} htmlFor="bg">
                  What do you want to learn?
                </label>
                <textarea
                  id="bg"
                  value={form.goals}
                  onChange={set("goals")}
                  placeholder="Songs, riffs, technique, theory..."
                  className={`${fieldClass} min-h-[86px] resize-y`}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-7 rounded-full bg-white text-[#0a0a0d] py-4 text-[0.88rem] font-semibold hover:bg-gradient-to-br hover:from-[#e0a6f2] hover:to-[#c977e0] transition-all"
              >
                Send Request
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
