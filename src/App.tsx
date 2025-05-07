import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import CompScrollToTop from "./components/ScrollToTop/CompScrollToTop";
import Projects from "./sections/Projects/Projects";
import { Footer } from './sections/Footer/Footer';
import Pricing from "./sections/Pricing/Pricing";
import Contact from "./sections/Contact/Contact";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './i18n';
export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('documentTitle');
  }, [i18n.language, t]);

  return (
    <div className="App scroll-smooth bg-gray-800 antialiased">
      <Hero />
      <About />
      <CompScrollToTop />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}