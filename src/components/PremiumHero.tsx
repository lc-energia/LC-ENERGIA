'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import Image from 'next/image';
import MorphingShapes from './MorphingShapes';

const PremiumHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <MorphingShapes intensity="subtle" />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-16 items-center min-h-screen py-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-2xl"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">
                  Eccellenza nella Riqualificazione Energetica
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-dark-200 mb-8 leading-tight"
              >
                Perché scegliere{' '}
                <span className="text-primary relative">
                  LC Energia
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
                ?
              </motion.h2>

              {/* Description Text */}
              <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
                </p>
                <p>
                  Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all'avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
                </p>
                <p>
                  Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L'obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
                </p>
              </motion.div>

              {/* Value Cards */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-10">
                <motion.div
                  className="flex-1 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-primary to-primary-600 text-white flex items-center justify-center p-4 rounded-xl shadow-lg min-h-[120px] h-full group-hover:shadow-xl transition-all duration-300">
                    <p className="text-lg font-semibold text-center">
                      Recependo e concretizzando al meglio le sue richieste.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-secondary to-secondary-600 text-white flex items-center justify-center p-4 rounded-xl shadow-lg min-h-[120px] h-full group-hover:shadow-xl transition-all duration-300">
                    <p className="text-lg font-semibold text-center">
                      Offrendo la nostra professionalità e disponibilità.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center font-semibold text-white bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  Richiedi una Consulenza Gratuita
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <Image
                alt="Lavoratore in un campo di pannelli solari"
                src="/img/1Trabajador campo paneles solares.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Attivo 24/7</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-gray-600">Anni di Esperienza</div>
                </div>
              </motion.div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default PremiumHero;