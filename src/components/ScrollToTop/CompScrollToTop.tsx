"use client";

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function CompScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 motion-safe:animate-bounce">
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