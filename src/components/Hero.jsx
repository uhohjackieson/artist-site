import { Play } from "lucide-react";
import artistPhoto from "../assets/jaclyn.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-black to-zinc-950 text-white overflow-hidden pt-36">
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 min-h-[calc(100vh-7rem)] grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-10"
        >
          <p className="text-pink-400 uppercase tracking-[0.5em] text-xs font-semibold mb-6">
            Guitarist • Performer • Creator
          </p>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[0.9] tracking-[-0.06em]">
            Jaclyn
            <span className="block text-pink-500">Rose</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed font-normal">
            Rock guitarist, performer, and content creator.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-black hover:bg-pink-500 hover:text-white transition"
            >
              <Play size={18} />
              Watch Videos
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-8 py-4 font-black text-white hover:border-pink-400 hover:text-pink-300 transition"
            >
              Work With Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -right-10 top-20 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

          <img
            src={artistPhoto}
            alt="Jaclyn Rose performing guitar"
            className="relative w-full h-[560px] md:h-[720px] object-cover object-center rounded-[1.25rem] shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
