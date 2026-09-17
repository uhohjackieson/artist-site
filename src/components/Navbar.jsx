import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Videos", "Lessons", "Shop", "Work", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="group" onClick={() => setOpen(false)}>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Jaclyn Rose
          </h1>

          <p className="text-[10px] uppercase tracking-[0.4em] text-pink-400 mt-1">
            Guitarist
          </p>
        </a>

        <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-pink-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-block border border-white/20 hover:border-pink-400 hover:text-pink-300 px-5 py-3 rounded-full text-sm font-bold transition"
        >
          Work With Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-sm font-bold uppercase tracking-[0.25em] text-zinc-300">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-pink-400 transition"
                >
                  {link}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block text-center border border-white/20 hover:border-pink-400 hover:text-pink-300 px-5 py-3 rounded-full transition"
              >
                Work With Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
