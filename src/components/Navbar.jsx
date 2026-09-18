import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Videos", "Lessons", "Shop", "Work", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        stuck
          ? "bg-[#0a0a0d]/80 backdrop-blur-xl border-white/10"
          : "border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#top" onClick={() => setOpen(false)} className="leading-none">
          <div className="font-semibold tracking-[0.06em] text-[1.1rem] uppercase">
            Jaclyn Rose
          </div>
          <div className="text-[0.56rem] tracking-[0.42em] uppercase text-[#b75fd0] mt-1.5">
            Guitarist
          </div>
        </a>

        <nav className="hidden md:flex gap-9 text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#b6b6c2]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#d18ce8] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#lessons"
          className="hidden md:inline-block border border-white/10 rounded-full px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] uppercase hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
        >
          Book a Lesson
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0d]/95 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[#b6b6c2]">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#d18ce8] transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#lessons"
                onClick={() => setOpen(false)}
                className="mt-2 text-center border border-white/10 rounded-full px-5 py-3 hover:border-[#b75fd0] hover:text-[#d18ce8] transition-colors"
              >
                Book a Lesson
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
