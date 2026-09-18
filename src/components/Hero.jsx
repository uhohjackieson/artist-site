import { Play } from "lucide-react";
import { motion } from "framer-motion";
import artistPhoto from "../assets/jaclyn.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      {/* fade-out violet glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-15%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(183,95,208,.22), rgba(154,75,181,.10) 42%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[0.68rem] font-semibold tracking-[0.36em] uppercase text-[#b75fd0]"
        >
          Guitarist • Performer • Creator
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="font-semibold uppercase tracking-[0.02em] leading-none mt-5 text-[clamp(3.4rem,10vw,7.5rem)]"
        >
          Jaclyn <span className="text-[#b75fd0]">Rose</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="text-[#b6b6c2] text-[1.08rem] leading-[1.8] max-w-[33rem] mx-auto mt-6"
        >
          Rock guitarist, performer, and content creator — playing the songs
          people actually want to hear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24 }}
          className="flex flex-wrap justify-center gap-3.5 mt-9"
        >
          <a
            href="#videos"
            className="inline-flex items-center gap-2.5 rounded-full bg-white text-[#0a0a0d] px-8 py-4 text-[0.85rem] font-semibold hover:bg-gradient-to-br hover:from-[#d18ce8] hover:to-[#b75fd0] transition-all"
          >
            <Play size={17} />
            Watch Videos
          </a>
          <a
            href="#lessons"
            className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-[0.85rem] font-semibold hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
          >
            Book a Lesson
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.32 }}
          className="relative mx-auto mt-16 max-w-[520px] rounded-2xl overflow-hidden group"
        >
          <img
            src={artistPhoto}
            alt="Jaclyn Rose performing live"
            className="w-full h-[clamp(520px,72vh,760px)] object-cover object-[center_18%] transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,13,.72), rgba(10,10,13,.18) 45%, transparent 70%), linear-gradient(210deg, rgba(183,95,208,.16), transparent 58%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
