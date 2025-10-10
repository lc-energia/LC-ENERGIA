'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-white">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-screen py-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">
                  Eccellenza nella Riqualificazione Energetica
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-200 mb-8 leading-tight">
                Perché scegliere{' '}
                <span className="text-primary">LC Energia</span>?
              </h1>

              {/* Description */}
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>
                  LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
                </p>
                <p>
                  Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all'avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
                </p>
                <p>
                  Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L'obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
                </p>
              </div>

              {/* Value Cards */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 bg-primary text-white p-4 rounded-lg shadow-lg min-h-[100px] flex items-center justify-center">
                  <p className="text-center font-semibold">
                    Recependo e concretizzando al meglio le sue richieste.
                  </p>
                </div>
                <div className="flex-1 bg-secondary text-white p-4 rounded-lg shadow-lg min-h-[100px] flex items-center justify-center">
                  <p className="text-center font-semibold">
                    Offrendo la nostra professionalità e disponibilità.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-semibold text-white bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Richiedi una Consulenza Gratuita
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] lg:h-[600px] shadow-2xl">
                <Image
                  src="/img/home page.png"
                  alt="LC Energia - Soluzioni energetiche innovative"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />

                {/* Simple overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Status badges */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Attivo 24/7</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">30+</div>
                    <div className="text-sm text-gray-600">Anni di Esperienza</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;