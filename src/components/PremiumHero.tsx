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
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="mb-6">
                <Badge variant="primary">Eccellenza nella Riqualificazione Energetica</Badge>
              </div>

              {/* Title */}
              <HeroTitle className="mb-8" color="secondary" style={{ color: '#F49918' }}>
                Perché scegliere <HighlightText>LC Energia</HighlightText>?
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
                  Per raggiungere questi risultati, LC Energia ha sempre considerato importante e prioritario il continuo e sistematico aggiornamento dei suoi tecnici con specifici programmi di formazione. L&apos;obiettivo principale della nostra società rimane da sempre la soddisfazione del cliente:
                </Text>
              </div>

              {/* Enhanced Value Cards */}
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <motion.div
                  className="flex-1 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm" style={{ background: 'linear-gradient(to right, #e67e00, #cc6f00)' }}></div>
                  <div className="relative p-6 rounded-2xl shadow-xl min-h-[120px] flex items-center justify-center border backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, #e67e00, #cc6f00)', borderColor: 'rgba(255, 172, 0, 0.3)' }}>
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }}></div>
                    <div className="absolute top-0 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                    <Text size="lg" weight="semibold" color="white" className="text-center relative z-10 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                      Recependo e concretizzando al meglio le sue richieste
                    </Text>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm" style={{ background: 'linear-gradient(to right, #7db042, #6e9c3a)' }}></div>
                  <div className="relative p-6 rounded-2xl shadow-xl min-h-[120px] flex items-center justify-center border backdrop-blur-sm" style={{ background: 'linear-gradient(to bottom right, #7db042, #6e9c3a)', borderColor: 'rgba(153, 195, 74, 0.3)' }}>
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)' }}></div>
                    <div className="absolute top-0 right-1/4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                    <Text size="lg" weight="semibold" color="white" className="text-center relative z-10 leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                      Offrendo la nostra professionalità e disponibilità
                    </Text>
                  </div>
                </motion.div>
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