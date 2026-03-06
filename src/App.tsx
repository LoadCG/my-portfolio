import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import CompScrollToTop from "./components/ScrollToTop/CompScrollToTop";
import Projects from "./sections/Projects/Projects";
import { Footer } from './sections/Footer/Footer';
import Contact from "./sections/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";
// import Skills from "./sections/Skills/Skills";
// import Courses from "./sections/Courses/Courses";
// import Pricing from "./sections/Pricing/Pricing";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './i18n';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('documentTitle');
  }, [i18n.language, t]);

  return (
    <div className="App overflow-x-hidden bg-[#07070a] font-sans text-white antialiased scroll-smooth">
      {/* Ambient Glowing Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="animate-blob absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="animate-blob animation-delay-2000 absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      <a href="#main" className="skip-link">
        {t('a11y.skipToContent')}
      </a>

      <main id="main" tabIndex={-1} className="relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        {/* <Skills /> */}
        {/* <Courses /> */}
        <Projects />
        {/* <Pricing /> */}
        <Contact />
      </main>

      <Footer />
      <CompScrollToTop />
      <CustomCursor />
      <Analytics />
    </div>
  );
}