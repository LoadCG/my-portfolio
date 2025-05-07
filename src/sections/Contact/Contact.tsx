"use client";

import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('contact.titleWhite')}{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://wa.link/uudby2"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
          >
            <FaWhatsapp className="mb-4 h-12 w-12 text-green-500 group-hover:text-green-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.whatsapp.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.whatsapp.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 hover:text-gray-50 transition-colors duration-300">
              {t('contact.options.whatsapp.action')}
            </span>
          </a>

          <a
            href="https://www.instagram.com/design_cg.srn/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
          >
            <FaInstagram className="mb-4 h-12 w-12 text-pink-500 group-hover:text-pink-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.instagram.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.instagram.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 hover:text-gray-50 transition-colors duration-300">
              {t('contact.options.instagram.action')}
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700 hover:shadow-lg"
          >
            <FaLinkedin className="mb-4 h-12 w-12 text-blue-500 group-hover:text-blue-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.linkedin.title')}</h3>
            <p className="text-center text-gray-400">{t('contact.options.linkedin.description')}</p>
            <span className="mt-2 text-sm text-emerald-400 hover:text-gray-50 transition-colors duration-300">
              {t('contact.options.linkedin.action')}
            </span>
          </a>

          <div className="group flex flex-col items-center justify-center rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700 hover:shadow-lg duration-500 ease-in-out">
            <HiLocationMarker className="mb-4 h-12 w-12 text-red-500 group-hover:text-red-400" />
            <h3 className="mb-2 text-xl font-semibold text-white">{t('contact.options.location.title')}</h3>
            <p className="text-center text-gray-400">
              {t('contact.options.location.text')}
            </p>
            <p className="text-center text-gray-400 text-sm">
              {t('contact.options.location.secondaryText')}
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400">
            <HiOutlineMail className="inline-block mx-2 h-5 w-5 mb-1 hover:text-gray-50 transition-colors duration-500 ease-in-out" />
            {t('contact.options.location.email')}{' '}
            <a href="mailto:cauangabrielfac@gmail.com" className="hover:ml-1 hover:text-emerald-500 transition-all duration-500 ease-in-out text-emerald-400 hover:underline">
              cauangabrielfac@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}