// FILE: src/components/Footer.tsx

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation(['footer', 'navbar', 'common']);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Navigation items using navbar translations
  const quickLinks = ['about', 'projects', 'experience', 'contact'];

  return (
    <footer className="bg-primary text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">{t('footer:brand')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer:description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer:quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {t(`navbar:items.${item}`)}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer:connect')}</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/kevin-ekwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-accent transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://github.com/kevin-ekwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-accent transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://twitter.com/kevin-ekwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-accent transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {t('footer:copyright')}
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-secondary transition-all"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('common:buttons.scrollToTop')}
          >
            <HiArrowUp className="text-xl" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
