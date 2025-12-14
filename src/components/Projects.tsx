// FILE: src/components/Projects.tsx

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { HiExternalLink, HiLightningBolt, HiCheckCircle } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation(['projects', 'data']);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Get projects from translation data
  const projects = t('data:projects', { returnObjects: true }) as any[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-heading mb-4">
              {t('projects:title')}
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-text max-w-3xl mx-auto">
              {t('projects:subtitle')}
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                }}
                className="bg-background rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-primary font-heading mb-3"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-text text-lg">{project.description}</p>
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 md:mt-0 md:ml-6 text-secondary hover:text-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <HiExternalLink className="text-3xl" />
                      </motion.a>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <HiLightningBolt className="text-red-500 text-xl" />
                        <h4 className="font-bold text-primary">{t('projects:labels.problem')}</h4>
                      </div>
                      <p className="text-sm text-text">{project.problem}</p>
                    </div>

                    <div className="bg-white p-5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <HiCheckCircle className="text-secondary text-xl" />
                        <h4 className="font-bold text-primary">{t('projects:labels.solution')}</h4>
                      </div>
                      <p className="text-sm text-text">{project.solution}</p>
                    </div>

                    <div className="bg-white p-5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <HiCheckCircle className="text-accent text-xl" />
                        <h4 className="font-bold text-primary">{t('projects:labels.impact')}</h4>
                      </div>
                      <p className="text-sm text-text font-semibold">{project.impact}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      {t('projects:labels.techStack')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-white text-text px-4 py-2 rounded-lg text-sm font-medium border border-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: '#1E88E5',
                            color: '#FFFFFF',
                            borderColor: '#1E88E5',
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
