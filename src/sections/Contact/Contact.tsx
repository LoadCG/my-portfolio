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
    <section id="contact" className="relative min-h-screen w-full px-6 py-24 sm:py-32 flex flex-col items-center justify-center overflow-hidden">
      <div ref={sectionRef} className="container mx-auto max-w-6xl w-full transition-all duration-1000">

        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest w-fit mb-6 mx-auto transition-all">
            {t('contact.titleWhite')}
          </div>
          <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-7xl">
            {t('contact.title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Social Spotlight (LinkedIn + WhatsApp) */}
          <div className="md:col-span-2 grid grid-cols-1 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.link/uudby2"
              target="_blank"
              onClick={() => track('click_whatsapp_contact')}
              data-cursor="hover"
              data-cursor-color="green"
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-green-500/30 hover:bg-green-500/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-3xl bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t('contact.options.whatsapp.title')}</h3>
                    <p className="text-sm text-slate-400">{t('contact.options.whatsapp.description')}</p>
                  </div>
                </div>
                <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  🚀
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
              target="_blank"
              onClick={() => track('click_linkedin_contact')}
              data-cursor="hover"
              data-cursor-color="blue"
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-3xl bg-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t('contact.options.linkedin.title')}</h3>
                  <p className="text-sm text-slate-400">{t('contact.options.linkedin.description')}</p>
                </div>
              </div>
            </a>
          </div>

          {/* Secondary Social Hub */}
          <div className="grid grid-cols-2 gap-6">
            {/* GitHub */}
            <a href="https://github.com/LoadCG" target="_blank" data-cursor-color="purple" className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center transition-all hover:bg-purple-500/10 hover:border-purple-500/30">
              <FaGithub className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">GitHub</span>
            </a>
            {/* Behance */}
            <a href="https://www.behance.net/cauanresende" target="_blank" data-cursor-color="blue" className="group rounded-[2.5rem] border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center transition-all hover:bg-blue-600/10 hover:border-blue-600/30">
              <FaBehance className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors" />
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Behance</span>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/muone_mkt/" target="_blank" data-cursor-color="pink" className="group col-span-2 rounded-[2.5rem] border border-white/10 bg-white/5 p-6 flex items-center justify-center gap-4 transition-all hover:bg-pink-500/10 hover:border-pink-500/30">
              <FaInstagram className="w-8 h-8 text-pink-500" />
              <span className="text-sm font-bold text-white">Instagram</span>
            </a>
          </div>

          {/* Location & Email (Bento Right) */}
          <div className="md:row-span-1 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-red-500/30 flex flex-col justify-between">
            <div>
              <HiLocationMarker className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.options.location.title')}</h3>
              <p className="text-sm text-slate-500">{t('contact.options.location.text')}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Disponível Remoto</span>
            </div>
          </div>

          {/* Email CTA (Full Width Bottom) */}
          <div className="md:col-span-4 mt-8">
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
                <div className="flex items-center gap-6">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 text-white">
                    <HiOutlineMail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Vamos criar algo incrível?</h4>
                    <p className="text-slate-400">Entre em contato diretamente via e-mail</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="relative group/email px-10 py-5 bg-white text-black font-extrabold rounded-2xl hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3"
                >
                  <span className="font-mono">cauangabrielfac@gmail.com</span>
                  {copied ? <HiCheck className="w-5 h-5 text-green-600" /> : <HiClipboardCopy className="w-5 h-5 opacity-50" />}

                  {/* Copy Alert */}
                  {copied && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-500 text-white text-xs rounded-xl shadow-lg border border-emerald-400 animate-in slide-in-from-bottom-2">
                      E-mail Copiado!
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
