import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDocumentMeta = () => {
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    // Update document title
    document.title = t('meta.title');

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('meta.keywords'));
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.title'));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.description'));
    }

    // Update HTML lang attribute
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language]);
};
