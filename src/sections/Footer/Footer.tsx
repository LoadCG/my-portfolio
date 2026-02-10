import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            {t('footer.copyright')}
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/cauangabrielsrn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label={t('footer.social.instagram')}
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label={t('footer.social.linkedin')}
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/LoadCG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              aria-label={t('footer.social.github')}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}