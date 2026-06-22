import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Videos from "./components/Videos";
import Lessons from "./components/Lessons";
import ShopPreview from "./components/ShopPreview";
import WorkWithMe from "./components/WorkWithMe";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Videos />
      <Lessons />
      <ShopPreview />
      <WorkWithMe />
      <About />
      <Contact />
    </div>
  );
}
