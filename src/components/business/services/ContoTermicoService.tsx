/**
 * ContoTermicoService - Componente específico para Conto Termico
 * Layout custom con secciones especiales
 */

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface ContoTermicoServiceProps {
  service: ServiceData;
}

export default function ContoTermicoService({ service }: ContoTermicoServiceProps) {
  return (
    <div className="w-full">
      {/* Título Conto Termico 2.0 */}
      <motion.div
        className="mb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <h2 className="text-3xl font-bold text-gradient-combined mb-4">Conto Termico 2.0</h2>
      </motion.div>

      {/* Secciones personalizadas */}
      {service.sections.map((section, index) => {
        // Sección "Come si recupera l'incentivo?" con imagen
        if (section.title === 'Come si recupera l\'incentivo?') {
          return (
            <motion.div
              key={index}
              className="w-full mb-8"
              variants={cardEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                  <Image
                    src="/img/conto termicp.jpg"
                    alt="Conto Termico 3.0"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                  <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                    <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                    <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        }

        // Sección "Cos'è, come funziona..." con imagen
        if (section.title === "Cos'è, come funziona e come accedere agli incentivi") {
          return (
            <motion.div
              key={index}
              className="w-full mb-8"
              variants={cardEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                  <Image
                    src="/img/conto termicp.jpg"
                    alt="Conto Termico 3.0"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                  <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                    <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                    <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        }

        // Secciones estándar
        return (
          <motion.div
            key={index}
            className="mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div className="bg-white rounded-xl shadow-card p-6">
              <h3 className="text-xl font-bold text-gradient-combined mb-4">{section.title}</h3>
              <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>

              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
