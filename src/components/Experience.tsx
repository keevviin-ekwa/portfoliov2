// FILE: src/components/Experience.tsx

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation(['experience', 'data']);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get experiences from translation data
  const experiences = t('data:experiences', { returnObjects: true }) as any[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">
              {t('experience:title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-text max-w-3xl mx-auto">
              {t('experience:subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-secondary origin-top"
              variants={lineVariants}
              style={{ transform: 'translateX(-50%)' }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-8`}
                >
                  {/* Timeline Icon */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center z-10 shadow-lg"
                    style={{ transform: 'translateX(-50%)' }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <HiBriefcase className="text-secondary text-2xl" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="w-full md:w-5/12 ml-24 md:ml-0"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                      <div className="mb-4">
                        <motion.h3
                          className="text-2xl font-bold text-primary font-heading mb-2"
                          whileHover={{ x: 5 }}
                        >
                          {exp.role}
                        </motion.h3>
                        <p className="text-secondary font-semibold text-lg mb-1">
                          {exp.company}
                        </p>
                        <p className="text-accent font-medium">{exp.period}</p>
                      </div>

                      <p className="text-text mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                          {t('experience:labels.keyAchievements')}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-text"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                            >
                              <HiCheckCircle className="text-accent text-lg flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                          {t('experience:labels.techStack')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="bg-background text-text px-3 py-1.5 rounded-lg text-xs font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                              }
                              transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: '#1E88E5',
                                color: '#FFFFFF',
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
