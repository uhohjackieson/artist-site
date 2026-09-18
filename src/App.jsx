import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Videos from "./components/Videos";
import Booking from "./components/Booking";
import ShopPreview from "./components/ShopPreview";
import WorkWithMe from "./components/WorkWithMe";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0d] text-[#f2f2f4]">
      <Navbar />
      <Hero />
      <Videos />
      <Booking />
      <ShopPreview />
      <WorkWithMe />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
