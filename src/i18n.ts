import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "./locales/en";
import ptTranslations from "./locales/pt";

const setDocumentLang = (lng: string) => {
  document.documentElement.lang = lng === "pt" ? "pt-BR" : lng;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      pt: {
        translation: ptTranslations,
      },
    },
  })
  .then(() => {
    setDocumentLang(i18n.language);
  });

i18n.on("languageChanged", setDocumentLang);

export default i18n;
