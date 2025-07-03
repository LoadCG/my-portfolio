"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiDownload, HiArrowDown } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import CompNavbar from "../../components/Navbar/CompNavbar";
import { useDynamicHeight } from "../../hooks/useDynamicHeight";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(50);
  const heroHeight = useDynamicHeight(navbarHeight);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <CompNavbar ref={navbarRef} />

      <aside
        style={{ height: heroHeight }}
        className="flex flex-col-reverse items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-8 md:flex-row md:px-12"
      >
        {/* Avatar */}
        <div className="mt-6 flex-shrink-0 md:mt-0 md:mr-16 hover:scale-105 transition-all duration-500 ease-in-out active:scale-95 cursor-grab active:cursor-grabbing ">
          <img
            src="/images/avatar.png"
            alt="Cauan Gabriel"
            className="h-14 sm:h-28 w-14 sm:w-28 md:h-78 md:w-78 rounded-full object-cover ring-2 ring-gray-100"
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {t('hero.title')}{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Cauan Gabriel
            </span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-400 md:mt-4 md:text-lg">
            {t('hero.subtitle')}
          </p>

          {/* Call to actions */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download = "Cauan Gabriel da Silva Resende Nascimento - CV.pdf";
                link.click();
              }}
              color="light"
              outline={true}
              size="lg"
              className="inline-flex min-w-[180px] max-w-full transform items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-lg font-medium text-white transition-transform hover:cursor-pointer hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:outline-none hover:scale-105"
              pill={true}
            >
              <HiDownload className="mr-2 h-5 w-5" />
              {t('hero.downloadCv')}
            </Button>

            <a
              href="#contact"
              className="inline-flex min-w-[180px] max-w-full group transform items-center justify-center rounded-full bg-green-500 px-4 py-2 text-lg font-medium text-white transition-transform hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none hover:scale-105"
            >
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 h-5 w-5" />
                {t('hero.contactMe')}
              </div>
              <div className="ml-3 flex items-center justify-center rounded-full bg-green-600 p-1 transition-transform group-hover:bg-green-700">
                <HiArrowDown className="h-4 w-4 text-white" />
              </div>
            </a>

            <a
              href="https://github.com/LoadCG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[180px] max-w-full transform items-center justify-center rounded-full bg-gray-800 px-4 py-2 text-lg font-medium text-white transition-transform hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.375.202 2.392.1 2.645.64.7 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.566 4.935.36.31.682.923.682 1.86 0 1.344-.012 2.427-.012 2.755 0 .268.18.579.688.481C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          </div>

        </div>
      </aside>

      {/* Scroll indicator */}
      <div className="hidden md:block relative -mt-20 pb-12 text-center">
        <a href="#about">
          <div className="group inline-flex animate-bounce flex-col items-center justify-center">
            <p className="mb-2 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              {t('hero.scrollText')}
            </p>
            <HiArrowDown className="h-6 w-6 text-emerald-400 group-hover:text-gray-50 transition-colors duration-300" />
          </div>
        </a>
      </div>
    </>
  );
}