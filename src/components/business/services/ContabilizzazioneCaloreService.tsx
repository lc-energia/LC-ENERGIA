/**
 * ContabilizzazioneCaloreService - Componente para Contabilizzazione Calore
 * Layout con introduction box, imagen lateral y secciones en cards
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData, Section } from '@/data/services';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';

interface ContabilizzazioneCaloreServiceProps {
  service: ServiceData;
}

export default function ContabilizzazioneCaloreService({ service }: ContabilizzazioneCaloreServiceProps) {
  return (
    <div className="w-full">
      {/* Cuadro con introduction - usa el contenido de la primera sección */}
      <motion.div
        className="mb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#F49918]/20">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F49918]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <div className="relative z-10">
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.sections[0].content }}></div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          className="lg:col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Image
            src="/img/cont1.jpg"
            alt="Contabilizzazione Calore"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="lg:col-span-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="grid grid-cols-1 gap-8">
            {service.sections.slice(1).map((section: Section, i: number) => (
              <motion.div
                key={i}
                variants={cardEntrance}
              >
                <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-secondary-100 transition-smooth">
                  <h5 className="text-xl font-bold mb-3 text-gradient-secondary">{section.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
