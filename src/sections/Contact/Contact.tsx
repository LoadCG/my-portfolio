"use client";

import { useState, useEffect, useRef } from "react";
import { HiLocationMarker, HiOutlineMail, HiCheck, HiClipboardCopy } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { track } from '@vercel/analytics';

export default function Contact() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("cauangabrielfac@gmail.com");
    setCopied(true);
    track('copy_email');
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="min-h-screen w-full px-4 py-20 flex flex-col items-center justify-center">
      <div ref={sectionRef} className="fade-in mx-auto max-w-6xl w-full">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('contact.titleWhite')}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* WhatsApp */}
          <a
            href="https://wa.link/uudby2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_whatsapp_contact')}
            aria-label="Entre em contato via WhatsApp"
            data-cursor="hover"
            data-cursor-color="green"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 blur-lg transition-all group-hover:opacity-40" />
              <FaWhatsapp className="relative z-10 h-10 w-10 text-green-500 transition-colors group-hover:text-green-400 sm:h-12 sm:w-12" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.whatsapp.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.whatsapp.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
              {t('contact.options.whatsapp.action')}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_linkedin_contact')}
            aria-label="Conecte-se comigo no LinkedIn"
            data-cursor="hover"
            data-cursor-color="blue"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-lg transition-all group-hover:opacity-40" />
              <FaLinkedin className="relative z-10 h-10 w-10 text-blue-500 transition-colors group-hover:text-blue-400 sm:h-12 sm:w-12" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.linkedin.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.linkedin.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
              {t('contact.options.linkedin.action')}
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/LoadCG"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_github_contact')}
            aria-label="Veja meu código no GitHub"
            data-cursor="hover"
            data-cursor-color="purple"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 blur-lg transition-all group-hover:opacity-40" />
              <FaGithub className="relative z-10 h-10 w-10 text-purple-500 transition-colors group-hover:text-purple-400 sm:h-12 sm:w-12" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.github.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.github.description')}</p>
            <span className="mt-2 text-sm text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
              {t('contact.options.github.action')}
            </span>
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/CauanGabriel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_behance_contact')}
            aria-label="Veja meu portfólio no Behance"
            data-cursor="hover"
            data-cursor-color="blue"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 blur-lg transition-all group-hover:opacity-40" />
              <FaBehance className="relative z-10 h-10 w-10 text-blue-600 transition-colors group-hover:text-blue-500 sm:h-12 sm:w-12" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.behance.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.behance.description')}</p>
            <span className="mt-2 text-sm text-blue-500 transition-colors duration-300 group-hover:text-blue-400">
              {t('contact.options.behance.action')}
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/muone_mkt/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('click_instagram_contact')}
            aria-label="Siga-me no Instagram"
            data-cursor="hover"
            data-cursor-color="pink"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-pink-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-pink-500 opacity-20 blur-lg transition-all group-hover:opacity-40" />
              <FaInstagram className="relative z-10 h-10 w-10 text-pink-500 transition-colors group-hover:text-pink-400 sm:h-12 sm:w-12" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.instagram.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.instagram.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 transition-colors duration-300 group-hover:text-emerald-300">
              {t('contact.options.instagram.action')}
            </span>
          </a>

          {/* Location */}
          <div
            data-cursor="hover"
            data-cursor-color="red"
            className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-red-500/10"
          >
            <HiLocationMarker className="mb-4 h-12 w-12 text-red-500 transition-colors group-hover:text-red-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.location.title')}</h3>
            <p className="text-center text-gray-400 text-sm">
              {t('contact.options.location.text')}
            </p>
            <p className="text-center text-gray-400 text-xs mt-1 font-medium">
              {t('contact.options.location.secondaryText')}
            </p>
          </div>

        </div>

        {/* Email Copy Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-flex flex-col items-center">
            <p className="text-lg text-gray-400 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
              <HiOutlineMail className="h-6 w-6 text-white/50" />
              <span className="text-white">{t('contact.options.location.email')}</span>
              <button
                onClick={copyToClipboard}
                className="group/mail relative flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-emerald-400 transition-all hover:bg-white/10 hover:text-emerald-300"
                aria-label="Copiar endereço de e-mail"
              >
                <span className="font-mono font-medium">cauangabrielfac@gmail.com</span>
                {copied ? <HiCheck className="h-5 w-5 text-green-400 animate-in zoom-in" /> : <HiClipboardCopy className="h-5 w-5 opacity-50 group-hover/mail:opacity-100" />}

                {/* Tooltip */}
                <span className={`absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xl transition-all duration-300 ${copied ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
                  Copiado!
                </span>
              </button>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
