'use client';
import PageHeader from '@/components/layout/PageHeader';
import AccreditationCard from '@/components/business/AccreditationCard';
import { accreditations } from '@/data/azienda-data';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';
import { Heading1 } from '@/components/ui/Typography';

export default function AccreditiContent() {
  return (
    <>
      <PageHeader title="Accrediti" />

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Heading1 className="text-gradient-combined mb-6">Siamo Professionisti Qualificati</Heading1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              La nostra competenza è garantita da numerose abilitazioni e iscrizioni che attestano la nostra professionalità nel settore energetico e della sicurezza.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={index}
                variants={cardEntrance}
              >
                <AccreditationCard accreditation={accreditation} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
