"use client";

import { useRef, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaBehance } from "react-icons/fa";
import CompNavbar from "../../components/Navbar/CompNavbar";
import { useDynamicHeight } from "../../hooks/useDynamicHeight";
import { useTranslation } from 'react-i18next';
import { track } from '@vercel/analytics';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(50);
  const heroHeight = useDynamicHeight(navbarHeight);
  const [greeting, setGreeting] = useState("");

  // Fade-in on mount + Dynamic Greeting
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);

    // Calculate greeting based on local time
    const hour = new Date().getHours();
    const isPt = i18n.language === 'pt';
    const isEs = i18n.language === 'es';
    let g = "";
    if (hour >= 5 && hour < 12) {
      if (isPt) g = 'Bom dia 👋';
      else if (isEs) g = '¡Buen día! 👋';
      else g = 'Good morning 👋';
    } else if (hour >= 12 && hour < 18) {
      if (isPt) g = 'Boa tarde 👋';
      else if (isEs) g = '¡Buenas tardes! 👋';
      else g = 'Good afternoon 👋';
    } else {
      if (isPt) g = 'Boa noite 👋';
      else if (isEs) g = '¡Buenas noches! 👋';
      else g = 'Good evening 👋';
    }
    setGreeting(g);

    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [i18n.language]);

  return (
    <>
      <CompNavbar ref={navbarRef} />

      <section
        id="home"
        style={{
          minHeight: heroHeight,
          paddingTop: `${navbarHeight + 32}px`
        }}
        className="relative flex w-full flex-col items-center justify-center px-6 overflow-hidden"
      >
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 text-center md:flex-row md:text-left">

            {/* Avatar Spotlight */}
            <div className="relative group transition-all duration-500 group-hover:scale-105">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
              <div className="relative h-48 w-48 overflow-hidden rounded-full border border-white/10 bg-[#0a0a0c] p-1 sm:h-56 sm:w-56 md:h-72 md:w-72">
                <img
                  src="/images/avatar.png"
                  alt="Cauan Gabriel"
                  className="h-full w-full rounded-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Content Module */}
            <div className={`magnetic-entrance flex-1 ${visible ? 'visible' : ''}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {greeting}
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                {t('hero.title')}{" "}
                <br></br><span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
                  Cauan Gabriel
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl md:text-xl">
                {t('hero.subtitle')}
              </p>

              {/* Action Hub */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <button
                  onClick={() => {
                    track('download_cv');
                    window.open("/cv.pdf", "_blank");
                  }}
                  className="animate-shimmer px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  <HiDownload className="w-5 h-5" />
                  {t('hero.downloadCv')}
                </button>

                <div className="flex gap-2">
                  <a href="https://github.com/LoadCG" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-white active:scale-95 hover:border-emerald-500/30">
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a href="https://www.behance.net/cauanresende" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-white active:scale-95 hover:border-blue-500/30">
                    <FaBehance className="w-6 h-6" />
                  </a>
                  <a href="https://wa.link/uudby2" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-white active:scale-95 hover:border-green-500/30">
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
