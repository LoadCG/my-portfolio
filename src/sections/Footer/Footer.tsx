import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-white/10 bg-[#07070a]/80 py-8 text-center text-sm text-gray-400 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6">

        <p className="text-center sm:text-left">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/cauangabrielsrn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-pink-500"
            aria-label={t('footer.social.instagram')}
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-blue-500"
            aria-label={t('footer.social.linkedin')}
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/LoadCG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label={t('footer.social.github')}
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}