"use client";

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

const BOTTOM_THRESHOLD = 36; // px de margem para considerar "no fim da página"

export default function CompScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const atBottom = scrollTop + clientHeight >= scrollHeight - BOTTOM_THRESHOLD;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // checa estado inicial

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const bottomClass = isAtBottom ? 'bottom-24' : 'bottom-8'; // acima do footer quando no fim

  return (
    <div className={`fixed ${bottomClass} right-8 z-50 motion-safe:animate-bounce transition-[bottom] duration-300`}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="p-3 bg-emerald-500 cursor-pointer text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <HiArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}