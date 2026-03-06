"use client";

import { useRef, useEffect, useState } from "react";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaBehance } from "react-icons/fa";
import CompNavbar from "../../components/Navbar/CompNavbar";
import { useDynamicHeight } from "../../hooks/useDynamicHeight";
import { useTranslation } from 'react-i18next';
import { track } from '@vercel/analytics';

function useGreeting() {
  const { i18n } = useTranslation();
  const hour = new Date().getHours();
  const isPt = i18n.language === 'pt';
  if (hour < 12) return isPt ? 'Bom dia 👋' : 'Good morning 👋';
  if (hour < 18) return isPt ? 'Boa tarde 👋' : 'Good afternoon 👋';
  return isPt ? 'Boa noite 👋' : 'Good evening 👋';
}

export default function Hero() {
  const { t } = useTranslation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(50);
  const heroHeight = useDynamicHeight(navbarHeight);
  const greeting = useGreeting();

  // Fade-in on mount
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <CompNavbar ref={navbarRef} />

      <section
        id="home"
        style={{
          minHeight: heroHeight,
          paddingTop: `${navbarHeight + 16}px`
        }}
        className="flex w-full flex-col px-6 md:px-12"
      >
        {/* Main Content Wrapper - Centers content of Hero */}
        <div className="flex flex-1 flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-0">
          {/* Avatar */}
          <div className="relative flex-shrink-0 transition-transform duration-700 hover:scale-105 md:mr-16">
            {/* Glowing pulse behind avatar */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-emerald-500 to-blue-500 opacity-40 blur-xl" />
            <img
              src="/images/avatar.png"
              alt="Avatar de Cauan Gabriel - Desenvolvedor Front-end e Designer"
              width={312}
              height={312}
              fetchPriority="high"
              draggable="false"
              className="relative z-10 h-28 w-28 select-none rounded-full border border-white/10 bg-[#0a0a0a] object-cover ring-2 ring-white/10 sm:h-36 sm:w-36 md:h-[312px] md:w-[312px]"
            />
          </div>

          {/* Text Content */}
          <div
            className={`magnetic-entrance w-full max-w-xl text-center transition-all duration-700 md:text-left ${visible ? 'visible' : ''}`}
          >
            {/* Greeting */}
            <span className="mb-2 block text-xl font-medium text-emerald-400 sm:text-2xl">
              {greeting}
            </span>

            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {t('hero.title')}{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Cauan Gabriel
              </span>
            </h1>

            <p className="mt-3 text-base leading-relaxed text-gray-400 md:mt-4 md:text-lg">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              {/* Download CV */}
              <button
                onClick={() => {
                  track('download_cv');
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Cauan Gabriel da Silva Resende Nascimento - CV.pdf";
                  link.click();
                }}
                aria-label={t('hero.downloadCv')}
                className="inline-flex min-w-[180px] max-w-full transform items-center justify-center rounded-full bg-blue-500 px-4 py-2.5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <HiDownload className="mr-2 h-5 w-5" />
                {t('hero.downloadCv')}
              </button>

              {/* Contact / WhatsApp */}
              <a
                href="#contact"
                onClick={() => track('click_contact_hero')}
                aria-label={t('hero.contactMe')}
                className="group inline-flex min-w-[180px] max-w-full transform items-center justify-center rounded-full bg-green-500 px-4 py-2.5 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                {t('hero.contactMe')}
                <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 p-1 transition-transform group-hover:bg-green-700">
                  <HiArrowDown className="h-4 w-4 text-white" />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/LoadCG"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_github_hero')}
                aria-label="GitHub de Cauan Gabriel"
                className="inline-flex min-w-[120px] flex-1 transform items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-lg font-medium text-gray-400 transition-all hover:scale-105 hover:border-emerald-500/30 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 sm:min-w-[150px] md:flex-initial"
              >
                <FaGithub className="mr-2 h-5 w-5" />
                GitHub
              </a>

              {/* Behance */}
              <a
                href="https://www.behance.net/cauanresende"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_behance_hero')}
                aria-label="Portfólio Behance de Cauan Gabriel"
                className="inline-flex min-w-[120px] flex-1 transform items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-lg font-medium text-gray-400 transition-all hover:scale-105 hover:border-blue-500/30 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 sm:min-w-[150px] md:flex-initial"
              >
                <FaBehance className="mr-2 h-6 w-6" />
                Behance
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Stays at bottom of flow */}
        <div className="py-8 text-center md:py-12">
          <a href="#about" className="group mx-auto flex w-fit flex-col items-center justify-center outline-none">
            <p className="mb-2 hidden text-xs font-medium text-gray-400 transition-colors duration-300 group-hover:text-emerald-400 sm:block sm:text-sm">
              {t('hero.scrollText')}
            </p>
            <div className="animate-bounce">
              <HiArrowDown className="h-7 w-7 text-emerald-400 transition-colors duration-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
