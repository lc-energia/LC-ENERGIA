'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { HeroTitle, Text, HighlightText, Badge } from '@/components/ui/Typography';

const PremiumHero = () => {
  const {
    elementRef,
    handleMouseMove,
    handleMouseLeave,
    getTransformStyle,
    getLightingStyle,
  } = useTiltEffect();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-white">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-screen py-20">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Badge */}
              <div className="mb-6">
                <Badge variant="primary">Eccellenza nella Riqualificazione Energetica</Badge>
              </div>

              {/* Title */}
              <HeroTitle className="mb-8 !text-left text-5xl md:text-6xl lg:text-8xl">
                <span className="text-black">Perché scegliere</span> <HighlightText><br></br>LC Energia?</HighlightText>
              </HeroTitle>

              {/* Description */}
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <Text>
                  LC ENERGIA è una società ingegneristica composta da tecnici qualificati con esperienza trentennale nel campo della consulenza, progettazione e realizzazione impiantistica civile e industriale.
                </Text>
                <Text>
                  Il plus aziendale è rappresentato dalla capacità di proporre soluzioni tecnologiche all&apos;avanguardia, mediante una progettazione integrata con la struttura architettonica e nel pieno rispetto delle normative di settore.
                </Text>
                <Text>
                  Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L&apos;obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente.
                </Text>
              </div>

              {/* Minimalist Value List */}
              <motion.div
                className="mt-2 grid gap-1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="group relative pl-8 py-3 bg-gradient-to-r from-[#F49918] to-[#c27a12] rounded-lg border-l-4 border-[#ffe3a6] hover:border-[#F49918] hover:from-[#c27a12] hover:to-[#F49918] hover:shadow-lg hover:shadow-[#F49918]/25 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-white/60 via-white/30 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                  <p className="font-body leading-relaxed text-base font-semibold text-white text-left max-w-65ch drop-shadow-sm flex items-center">Recepiamo e concretizziamo al meglio le sue richieste</p>
                </motion.div>

                <motion.div
                  className="group relative pl-8 py-3 bg-gradient-to-r from-[#F49918] to-[#c27a12] rounded-lg border-l-4 border-[#ffe3a6] hover:border-[#F49918] hover:from-[#c27a12] hover:to-[#F49918] hover:shadow-lg hover:shadow-[#F49918]/25 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  whileHover={{ x: 8, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-lg group-hover:scale-150 group-hover:rotate-180 transition-all duration-500"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-white/60 via-white/30 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>
                  <p className="font-body leading-relaxed text-base font-semibold text-white text-left max-w-65ch drop-shadow-sm flex items-center">Offriamo la nostra professionalità e disponibilità</p>
                </motion.div>
              </motion.div>

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
              <div
                ref={elementRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
                style={getTransformStyle()}
              >
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={getLightingStyle()}
                />

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <Image
                  src="/img/home page.png"
                  alt="LC Energia - Soluzioni energetiche innovative"
                  width={2792}
                  height={2835}
                  className="w-full h-auto"
                  priority
                  quality={90}
                />

  
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" style={{ opacity: 0.6 }} />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)`
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;