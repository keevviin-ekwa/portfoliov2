// FILE: src/components/Hero.tsx

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation(['hero', 'common']);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #1E88E5 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #00BFA6 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #1E88E5 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #1E88E5 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants}>
          <motion.span
            className="inline-block text-accent font-semibold text-lg mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero:greeting')}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
        >
          {t('hero:name')}
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
            {t('hero:title')}{' '}
            <motion.span
              className="text-accent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('hero:framework1')}
            </motion.span>
            {' '}&{' '}
            <motion.span
              className="text-accent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            >
              {t('hero:framework2')}
            </motion.span>
            {' '}{t('hero:titleSuffix')}{' '}
            <motion.span
              className="text-accent font-semibold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
            >
              {t('hero:focus')}
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          {t('hero:description')}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={handleContactClick}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 191, 166, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t('common:buttons.letsWorkTogether')}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiArrowRight />
            </motion.span>
          </motion.button>

          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t('common:buttons.viewProjects')}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
