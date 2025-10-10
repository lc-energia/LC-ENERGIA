'use client';

import FlippableCard from './FlippableCard';
import Image from 'next/image';
import FadeIn from './motion/FadeIn';
import { motion } from 'framer-motion';
import { SectionTitle, Text, HighlightText } from '@/components/ui/Typography';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-neutral-50 to-white overflow-hidden py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <FadeIn direction="right" delay={0.2} className="w-full lg:w-1/2 flex items-center">
            <div className="max-w-2xl">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-heading font-semibold rounded-full text-sm">
                  Eccellenza nella Riqualificazione Energetica
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <SectionTitle className="text-left mb-8">
                  Perché scegliere <HighlightText>LC Energia</HighlightText>?
                </SectionTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <Text size="lg" color="secondary">
                    LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
                  </Text>

                  <Text size="lg" color="secondary">
                    Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all'avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
                  </Text>

                  <Text size="lg" color="secondary">
                    Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L'obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
                  </Text>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex-1">
                  <FlippableCard text="Recependo e concretizzando al meglio le sue richieste." />
                </div>
                <div className="flex-1">
                  <FlippableCard text="Offrendo la nostra professionalità e disponibilità." />
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="left" delay={0.3} className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[600px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/img/1Trabajador campo paneles solares.jpg"
                alt="Lavoratore in un campo di pannelli solari"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;