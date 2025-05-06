import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-950 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Direitos autorais */}
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2025 Cauan Gabriel. Todos os direitos reservados.
          </p>

          {/* Redes sociais */}
          <div className="flex justify-center gap-4">
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cauangabrielsrn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/cauan-gabriel-nascimento-a3a1492ab/"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Linkedin"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/LoadCG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}