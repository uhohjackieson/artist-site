export default function Navbar() {
  const links = ["Videos", "Lessons", "Shop", "Work", "About"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="group">
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
      </div>
    </header>
  );
}
