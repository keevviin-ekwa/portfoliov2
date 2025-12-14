// FILE: src/components/Contact.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation(['contact', 'common']);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">
              {t('contact:title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-text max-w-3xl mx-auto">
              {t('contact:subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary font-heading mb-6">
                {t('contact:getInTouch')}
              </h3>
              <p className="text-text mb-8 leading-relaxed">
                {t('contact:description')}
              </p>

              <div className="space-y-6">
                <motion.a
                  href="mailto:kevin.ekwa@example.com"
                  className="flex items-center gap-4 text-text hover:text-secondary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                    <HiMail className="text-secondary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-textLight">{t('contact:contactInfo.email')}</p>
                    <p className="font-semibold">kevin.ekwa@example.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+243123456789"
                  className="flex items-center gap-4 text-text hover:text-secondary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                    <HiPhone className="text-secondary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-textLight">{t('contact:contactInfo.phone')}</p>
                    <p className="font-semibold">+1 (438) 542-4860</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-text"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                    <HiLocationMarker className="text-secondary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-textLight">{t('contact:contactInfo.location')}</p>
                    <p className="font-semibold">{t('contact:contactInfo.locationValue')}</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/kevin-ekwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a
                  href="https://github.com/kevin-ekwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-background rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    {t('common:form.name')}
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    {t('common:form.email')}
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    {t('common:form.message')}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-secondary transition-colors resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(0, 191, 166, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? t('common:buttons.messageSent') : t('common:buttons.sendMessage')}
                </motion.button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-accent font-semibold"
                  >
                    {t('common:form.thankYou')}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
