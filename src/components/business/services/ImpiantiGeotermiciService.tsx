/**
 * ImpiantiGeotermiciService - Componente para Impianti Geotermici
 * Layout con introduction box, 2 secciones + imagen, y tercera sección con accordion
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData, Section } from '@/data/services';
import InfoAccordion from '@/components/business/InfoAccordion';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
import SafeHTML from '@/components/shared/SafeHTML';

interface ImpiantiGeotermiciServiceProps {
  service: ServiceData;
}

export default function ImpiantiGeotermiciService({ service }: ImpiantiGeotermiciServiceProps) {
  const firstTwoSections = service.sections.slice(0, 2);
  const lastSection = service.sections[2];

  return (
    <div className="w-full">
      {/* Cuadro con introduction */}
      <motion.div
        className="mb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

          <div className="relative z-10">
            <SafeHTML html={service.introduction} className="text-gray-700 leading-relaxed" />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="lg:col-span-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="grid grid-cols-1 gap-8">
            {firstTwoSections.map((section: Section, i: number) => (
              <motion.div
                key={i}
                variants={cardEntrance}
              >
                <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                  <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Image
            src="/img/geotermico-ok.jpg"
            alt="Impianti Geotermici"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        className="mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-secondary-100 transition-smooth">
          <div className="flex items-center mb-4">
            <div className="flex-grow">
              <h5 className="font-bold text-lg mb-0 text-gradient-combined">{lastSection.title}</h5>
            </div>
          </div>
          <SafeHTML html={lastSection.content} className="text-sm text-gray-600 space-y-2 leading-relaxed" />
          {lastSection.accordionItems && (
            <div className="mt-4">
              <InfoAccordion items={lastSection.accordionItems} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
