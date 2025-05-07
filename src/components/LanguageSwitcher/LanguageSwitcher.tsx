// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative group my-auto">
      <select
        value={i18n.language}
        onChange={handleLanguageChange}
        className="appearance-none bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full py-1 pl-3 pr-6 text-sm text-white focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all cursor-pointer outline-none hover:bg-gray-800/90"
      >
        <option value="en" className="bg-gray-800 text-white">
          EN
        </option>
        <option value="pt" className="bg-gray-800 text-white">
          PT
        </option>
      </select>
      
      {/* Seta customizada */}
      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;