// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { HiGlobeAlt, HiChevronDown } from 'react-icons/hi';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt', label: 'Português', short: 'PT' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'es', label: 'Español', short: 'ES' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <HiGlobeAlt className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform duration-500" />
        <span className="text-xs font-bold text-white tracking-widest uppercase">
          {currentLang.short}
        </span>
        <HiChevronDown className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-44 rounded-2xl border border-white/20 bg-[#111115] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl z-[999]">
          <div className="p-1.5 flex flex-col gap-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex w-full items-center justify-between px-3 py-3 rounded-xl text-[11px] font-bold tracking-tight transition-all duration-200 ${i18n.language === lang.code
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {lang.label}
                {i18n.language === lang.code && (
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;