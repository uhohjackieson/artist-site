import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Videos from "./components/Videos";
import Stats from "./components/Stats";
import Lessons from "./components/Lessons";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Videos />
      <Lessons />
      <Stats />
      <Contact />
    </div>
  );
}
