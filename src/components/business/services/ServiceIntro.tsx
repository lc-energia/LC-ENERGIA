/**
 * ServiceIntro - Introducción modular de servicio
 * Maneja diferentes tipos de introducción según el servicio
 */

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, viewportSettings } from '@/lib/animation-variants';

interface ServiceIntroProps {
  slug: string;
  introduction: string;
}

export default function ServiceIntro({ slug, introduction }: ServiceIntroProps) {
  // Servicios que no muestran intro estándar (manejan internamente)
  const noIntroServices = [
    'progettazione-e-consulenza-tecnica',
    'progettazione-antincendio',
    'progettazione-acustica',
    'progettare-il-risparmio-energetico',
    'impianti-geotermici',
  ];

  if (noIntroServices.includes(slug)) {
    return null;
  }

  // Intro especial para impianti-fotovoltaici
  if (slug === 'impianti-fotovoltaici') {
    return (
      <motion.div
        className="text-center mx-auto mb-5"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <h6 className="text-gradient-primary font-bold text-lg uppercase text-center">
          IL NOSTRO INTERVENTO
        </h6>
        <p className="lead text-xl text-gray-600 leading-relaxed text-center" style={{maxWidth: '800px', margin: '0 auto'}}>
          Progettiamo e installiamo impianti fotovoltaici &quot;chiavi in mano&quot; partendo da una valutazione preliminare che considera i seguenti elementi di base:
        </p>
      </motion.div>
    );
  }

  // Intro con imagen para contributo-pnrr
  if (slug === 'contributo-pnrr') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
        <motion.div
          className="lg:col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Image
            src="/img/contributto.jpg"
            alt="Contributo PNRR"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="lg:col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="text-gray-700 leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: introduction }}></div>
        </motion.div>
      </div>
    );
  }

  // Intro estándar para otros servicios
  return null;
}
