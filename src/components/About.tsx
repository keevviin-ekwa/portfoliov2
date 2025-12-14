// FILE: src/components/About.tsx

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiCode, HiCloud, HiLightningBolt, HiChip } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation('about');
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  // Define skills with translation keys
  const skills = [
    {
      icon: HiCode,
      titleKey: 'skills.dotnetDev.title',
      descKey: 'skills.dotnetDev.description',
    },
    {
      icon: HiCode,
      titleKey: 'skills.laravelDev.title',
      descKey: 'skills.laravelDev.description',
    },
    {
      icon: HiCloud,
      titleKey: 'skills.cloudDevOps.title',
      descKey: 'skills.cloudDevOps.description',
    },
    {
      icon: HiLightningBolt,
      titleKey: 'skills.fullStack.title',
      descKey: 'skills.fullStack.description',
    },
  ];

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
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">
              {t('title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-text max-w-3xl mx-auto leading-relaxed">
              {t('description', {
                dotnet: t('highlights.dotnet'),
                laravel: t('highlights.laravel'),
                scalableSystems: t('highlights.scalableSystems'),
                restfulApis: t('highlights.restfulApis'),
                modernApps: t('highlights.modernApps'),
              })}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.titleKey}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                className="bg-white p-8 rounded-xl shadow-md transition-all duration-300"
              >
                <motion.div
                  className="text-secondary text-4xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon />
                </motion.div>
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">
                  {t(skill.titleKey)}
                </h3>
                <p className="text-text leading-relaxed">{t(skill.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
                {t('technicalExpertise')}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  '.NET 8',
                  'C#',
                  'ASP.NET Core',
                  'Laravel',
                  'PHP 8+',
                  'Eloquent ORM',
                  'Azure',
                  'SQL Server',
                  'MySQL',
                  'PostgreSQL',
                  'Entity Framework',
                  'Docker',
                  'Kubernetes',
                  'React',
                  'Vue.js',
                  'TypeScript',
                  'Livewire',
                  'REST APIs',
                  'gRPC',
                  'Redis',
                  'RabbitMQ',
                  'MongoDB',
                  'CI/CD',
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-background text-text px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: '#1E88E5',
                      color: '#FFFFFF',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
