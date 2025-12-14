import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import English translations
import enCommon from './locales/en/common.json';
import enNavbar from './locales/en/navbar.json';
import enHero from './locales/en/hero.json';
import enAbout from './locales/en/about.json';
import enProjects from './locales/en/projects.json';
import enExperience from './locales/en/experience.json';
import enContact from './locales/en/contact.json';
import enFooter from './locales/en/footer.json';
import enData from './locales/en/data.json';

// Import French translations
import frCommon from './locales/fr/common.json';
import frNavbar from './locales/fr/navbar.json';
import frHero from './locales/fr/hero.json';
import frAbout from './locales/fr/about.json';
import frProjects from './locales/fr/projects.json';
import frExperience from './locales/fr/experience.json';
import frContact from './locales/fr/contact.json';
import frFooter from './locales/fr/footer.json';
import frData from './locales/fr/data.json';

const resources = {
  en: {
    common: enCommon,
    navbar: enNavbar,
    hero: enHero,
    about: enAbout,
    projects: enProjects,
    experience: enExperience,
    contact: enContact,
    footer: enFooter,
    data: enData,
  },
  fr: {
    common: frCommon,
    navbar: frNavbar,
    hero: frHero,
    about: frAbout,
    projects: frProjects,
    experience: frExperience,
    contact: frContact,
    footer: frFooter,
    data: frData,
  },
};

i18n
  .use(LanguageDetector) // Auto-detect browser language
  .use(initReactI18next) // React bindings
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'navbar', 'hero', 'about', 'projects', 'experience', 'contact', 'footer', 'data'],
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser
      caches: ['localStorage'], // Persist selection
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: false, // Avoid loading states
    },
  });

export default i18n;
