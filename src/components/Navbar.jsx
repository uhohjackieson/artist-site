export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-wide text-white">
          Jaclyn Rose
        </a>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-pink-400 transition">
            About
          </a>
          <a href="#videos" className="hover:text-pink-400 transition">
            Videos
          </a>
          <a href="#lessons" className="hover:text-pink-400 transition">
            Lessons
          </a>
          {/* <a href="#shows" className="hover:text-pink-400 transition">
            Shows
          </a> */}
          <a href="#contact" className="hover:text-pink-400 transition">
            Contact
          </a>
        </nav>

        <a
          href="#lessons"
          className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full font-semibold transition"
        >
          Book Lessons
        </a>
      </div>
    </header>
  );
}
