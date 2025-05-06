import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import CompScrollToTop from "./components/ScrollToTop/CompScrollToTop";
// import StripesAnimation from "./sections/MaintanceTape/stripesAnimation";
import Projects from "./sections/Projects/Projects";
import { Footer } from './sections/Footer/Footer';
import Pricing from "./sections/Pricing/Pricing";
import Contact from "./sections/Contact/Contact";

document.title = "Cauan Gabriel - Fullstack Developer & Graphic Designer";
export default function App() {
  return (
    <div className="App scroll-smooth bg-gray-800 antialiased">
      <Hero />
      <About />
      <CompScrollToTop />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
      {/* Uncomment the line below to add the stripes animation */}
      {/* <div style={{ height: "5vh"}}>
        <StripesAnimation />
      </div> */}
    </div>
  );
}
