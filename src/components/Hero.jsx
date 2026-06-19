import { Play } from "lucide-react";
import artistPhoto from "../assets/jaclyn.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-950/40 via-black to-purple-950/30" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-pink-400 font-semibold mb-4">
            Guitarist • Performer • Content Creator
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            Jaclyn
            <span className="block text-pink-500">Rose</span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
            Rock and pop-punk inspired guitarist creating covers, live
            performances, and guitar-driven content.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#videos"
              className="bg-pink-600 hover:bg-pink-700 px-7 py-4 rounded-full font-bold flex items-center gap-2 transition"
            >
              <Play size={20} />
              Watch Videos
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-pink-500 hover:text-pink-400 px-7 py-4 rounded-full font-bold transition"
            >
              Book / Contact
            </a>
          </div>

          <div className="flex gap-5 mt-10 text-gray-400">
            <a
              href="https://instagram.com/uhohjackieson"
              className="hover:text-pink-400 transition"
            >
              Instagram
            </a>

            <a
              href="https://youtube.com/@jaclynrose696"
              className="hover:text-pink-400 transition"
            >
              YouTube
            </a>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-pink-600 blur-3xl opacity-20 rounded-full" />

          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-[1.02] transition duration-500">
              <img
                src={artistPhoto}
                alt="Jaclyn Rose"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
