import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language as 'en' | 'fr';

  return {
    currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en',
    isFrench: currentLanguage === 'fr',
  };
};
