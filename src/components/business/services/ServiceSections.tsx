/**
 * ServiceSections - Renderizador modular de secciones de servicio
 * Maneja diferentes tipos de secciones (modes, features, FAQs, etc.)
 */

'use client';
import { motion } from 'framer-motion';
import { Section } from '@/data/services-data';
import FeatureCard from '@/components/business/FeatureCard';
import FaqAccordion from '@/components/business/FaqAccordion';
import { staggerContainer, cardEntrance, fadeInUp, viewportSettings } from '@/lib/animation-variants';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SafeHTML from '@/components/shared/SafeHTML';

interface ServiceSectionsProps {
  sections: Section[];
  slug: string;
}

export default function ServiceSections({ sections, slug }: ServiceSectionsProps) {
  return (
    <>
      {sections.map((section, index) => {
        // Renderizar modes o features como cards
        if (section.modes || section.features) {
          const items = section.modes || section.features;
          const featureCardGridClass = (slug === 'progettazione-acustica' || slug === 'progettazione-antincendio')
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-2';

          return (
            <motion.div
              key={index}
              className="mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {section.title && (
                <h3 className="text-2xl font-bold text-gradient-combined mb-6 text-center">
                  {section.title}
                </h3>
              )}
              {section.content && (
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                  {section.content}
                </p>
              )}
              <motion.div
                className={`grid ${featureCardGridClass} gap-6`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                {items?.map((item, i) => (
                  <FeatureCard
                    key={i}
                    feature={item}
                    i={i}
                  />
                ))}
              </motion.div>
            </motion.div>
          );
        }

        // Renderizar FAQs
        if (section.questions) {
          return (
            <motion.div
              key={index}
              className="mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {section.title && (
                <h3 className="text-2xl font-bold text-gradient-combined mb-6 text-center">
                  {section.title}
                </h3>
              )}
              <FaqAccordion faqs={section.questions} />
            </motion.div>
          );
        }

        // Renderizar incentivos como tarjetas
        if (section.incentives) {
          return (
            <motion.div
              key={index}
              className="mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <h3 className="text-2xl font-bold text-gradient-combined mb-6 text-center">
                {section.title}
              </h3>
              {section.content && (
                <p className="text-gray-600 text-center mb-8">{section.content}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.incentives.map((incentive, i) => (
                  <motion.div
                    key={i}
                    className="bg-white rounded-xl shadow-card hover-lift p-6"
                    variants={cardEntrance}
                  >
                    <h4 className="text-xl font-bold text-gradient-primary mb-3">
                      {incentive.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{incentive.description}</p>
                    <Link
                      href={incentive.link}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                    >
                      Scopri di più
                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        }

        // Sección estándar con contenido
        return (
          <motion.div
            key={index}
            className="mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h3 className="text-2xl font-bold text-gradient-combined mb-4">
              {section.title}
            </h3>
            <SafeHTML html={section.content} className="text-gray-600 leading-relaxed" />
            {section.list && (
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        );
      })}
    </>
  );
}
