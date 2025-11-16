/**
 * ServicePartners - Grid de partners/colaboradores
 * Reutilizable para mostrar logos de partners
 */

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { staggerContainer, cardEntrance, fadeInUp, viewportSettings } from '@/lib/animation-variants';

interface Partner {
  src: string;
  alt: string;
}

interface ServicePartnersProps {
  title?: string;
  introduction?: string;
  partners?: Partner[];
}

export default function ServicePartners({ title, introduction, partners }: ServicePartnersProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <div className="mt-12">
      {title && (
        <motion.h3
          className="text-2xl font-bold text-gradient-combined mb-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {title}
        </motion.h3>
      )}

      {introduction && (
        <motion.p
          className="text-gray-600 text-center mb-8 max-w-3xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          {introduction}
        </motion.p>
      )}

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={cardEntrance}
            className="w-full"
          >
            <div className="flex justify-center items-center h-full p-4 bg-white rounded-lg shadow-card hover-lift hover-shine transition-smooth">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={150}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
