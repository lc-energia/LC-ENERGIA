/**
 * ProgettazioneService - Componente para Progettazione Antincendio y Acustica
 * Layout especial con introduction box, imagen y features
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services';
import FeatureCard from '@/components/business/FeatureCard';
import { fadeInUp, staggerContainer, viewportSettings } from '@/lib/animation-variants';

interface ProgettazioneServiceProps {
  service: ServiceData;
  slug: string;
}

export default function ProgettazioneService({ service, slug }: ProgettazioneServiceProps) {
  const section = service.sections[0];
  const items = section.features;

  // Determinar color según el servicio
  const borderColor = slug === 'progettazione-antincendio' ? 'border-[#F49918]/20' : 'border-[#9BBD2D]/20';
  const gradientVia = slug === 'progettazione-antincendio' ? 'via-[#F49918]/5' : 'via-[#9BBD2D]/5';
  const imageSrc = slug === 'progettazione-antincendio' ? '/img/anticendio.jpg' : '/img/acustica.jpg';
  const imageAlt = slug === 'progettazione-antincendio' ? 'Progettazione Antincendio' : 'Progettazione Acustica';

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
        <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border ${borderColor}`}>
          {/* Efecto de brillo */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${gradientVia} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>

          <div className="relative z-10">
            <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center mb-8 w-full"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <h2 className="text-3xl font-bold text-gradient-combined mb-4" style={{textAlign: 'center'}}>
          {section.title}
        </h2>
        {section.content && (
          <p className="text-lg text-gray-600 mt-2 leading-relaxed" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            {section.content}
          </p>
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="lg:col-span-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="grid grid-cols-1 gap-8">
            {items?.map((item, j) => (
              <FeatureCard key={j} feature={item} i={j} />
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
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
