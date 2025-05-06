"use client";

import { useRef, useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiDownload, HiMail, HiArrowDown } from "react-icons/hi";
import CompNavbar from "../../components/Navbar/CompNavbar";
import { useDynamicHeight } from "../../hooks/useDynamicHeight";

export default function Hero() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(64); // Valor padrão inicial
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
        <div className="mt-6 flex-shrink-0 md:mt-0 md:mr-8 hover:scale-105 transition-all duration-500 ease-in-out">
          <img
            src="/images/avatar.jpg"
            alt="Cauan Gabriel"
            className="h-24 w-24 md:h-48 md:w-48 rounded-full object-cover ring-2 ring-gray-100"
          />

        </div>

        {/* Text Content */}
        <div className="w-full max-w-xl text-center md:text-left">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Cauan Gabriel
            </span>
          </h1>
          <p className="mt-3 text-base leading-relaxed text-gray-400 md:mt-4 md:text-lg">
            With a foundation as a certified IT technician, coupled with my experience as a graphic designer and my current studies in Systems Analysis and Development Technology, I offer a versatile skillset. I am capable of building full-stack, multi-platform applications and designing visually attractive assets for clients.
          </p>

          {/* Call to actions */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <Button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/cv.pdf";
                link.download =
                  "Cauan Gabriel da Silva Resende Nascimento - CV.pdf";
                link.click();
              }}
              color="light"
              outline={true}
              size="lg"
              className="inline-flex w-full transform items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-lg font-medium text-white transition-transform hover:cursor-pointer hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:outline-none md:w-auto md:hover:scale-105"
              pill={true}
            >
              <HiDownload className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <a
              href="https://wa.link/uudby2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full transform items-center justify-center rounded-full bg-green-500 px-4 py-2 text-lg font-medium text-white transition-transform hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none md:w-auto md:hover:scale-105"
            >
              <HiMail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </div>
        </div>
      </aside>

      {/* Scroll indicator */}
      <div className="relative -mt-20 pb-12 text-center">
        <a href="#about">
          <div className="group inline-flex animate-bounce flex-col items-center justify-center">
            <p className="mb-2 text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              Explore more about me
            </p>
            <HiArrowDown className="h-6 w-6 text-emerald-400 group-hover:text-gray-50 transition-colors duration-300" />
          </div>
        </a>
      </div>
    </>
  );
}
