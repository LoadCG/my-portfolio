import { forwardRef, useState, useEffect } from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const SECTIONS = ['home', 'about', 'projects', 'contact'] as const;

const CompNavbar = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = id === 'home'
        ? document.querySelector('aside') ?? document.querySelector('section')
        : document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { id: 'home', href: '#', label: t('nav.home') },
    { id: 'about', href: '#about', label: t('nav.about') },
    // { id: 'skills', href: '#skills', label: t('nav.skills') },
    // { id: 'courses', href: '#courses', label: t('nav.courses') },
    { id: 'projects', href: '#projects', label: t('nav.projects') },
    // { id: 'pricing', href: '#pricing', label: t('nav.pricing') },
    { id: 'contact', href: '#contact', label: t('nav.contact') },
  ];

  return (
    <div ref={ref} role="navigation" aria-label={t('a11y.mainNav')}
      className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2"
    >
      {/* Pill navbar */}
      <nav className="rounded-full border border-white/8 bg-white/3 px-4 backdrop-blur-md transition-all duration-300 sm:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            Cauan G.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-baseline space-x-1">
            {navLinks.map(({ id, href, label }) => (
              <a
                key={id}
                href={href}
                onClick={() => setActiveSection(id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${activeSection === id
                  ? 'font-bold text-emerald-400'
                  : 'text-gray-400 hover:text-blue-400'
                  }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right side: language + mobile toggle */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none md:hidden"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-white/8 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map(({ id, href, label }) => (
              <a
                key={id}
                href={href}
                onClick={() => { setActiveSection(id); setMobileOpen(false); }}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${activeSection === id
                  ? 'text-emerald-400'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

CompNavbar.displayName = 'CompNavbar';
export default CompNavbar;