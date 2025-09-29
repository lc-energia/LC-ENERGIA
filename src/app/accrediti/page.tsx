'use client';
import PageHeader from '@/components/PageHeader';
import AccreditationCard from '@/components/AccreditationCard';
import { accreditations } from '@/data/azienda-data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const AccreditationsPage = () => {
  return (
    <>
      <PageHeader title="Accrediti" />

      <section className="py-12 sm:py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">Siamo Professionisti Qualificati</h1>
            <p className="mt-4 text-lg text-gray-600">
              La nostra competenza è garantita da numerose abilitazioni e iscrizioni che attestano la nostra professionalità nel settore energetico e della sicurezza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditations.map((accreditation, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <AccreditationCard accreditation={accreditation} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccreditationsPage;
