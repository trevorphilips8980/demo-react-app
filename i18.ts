import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLanguage from "./src/languages/en/en";

// Translations
const resources = {
  en: {
    translation: enLanguage,
  },
  // Add more languages and translations here
};

// get current language
const getCurrentLanguage = () => {
  const language = localStorage.getItem("language");
  return language || "en";
};

// configure i18
i18n.use(initReactI18next).init({
  resources,
  lng: getCurrentLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
