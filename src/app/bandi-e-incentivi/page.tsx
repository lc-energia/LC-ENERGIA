'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faSolarPanel, faFire, faBolt, faLeaf, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { fadeInUp, staggerContainer, cardEntrance, viewportSettings } from '@/lib/animation-variants';

export default function BandiIncentiviPage() {
  const incentives = [
    {
      title: 'Contributo PNRR',
      description: 'Ottieni il 40% a fondo perduto per impianti fotovoltaici nelle Comunità Energetiche Rinnovabili',
      icon: faSolarPanel,
      href: '/bandi-e-incentivi/contributo-pnrr',
      color: 'from-[#F49918] to-[#c27a12]',
      features: ['40% a fondo perduto', 'Comuni fino a 50.000 abitanti', 'CER e impianti rinnovabili']
    },
    {
      title: 'Conto Termico 3.0',
      description: 'Incentivi per la produzione di energia termica da fonti rinnovabili e efficientamento energetico',
      icon: faFire,
      href: '/bandi-e-incentivi/conto-termico',
      color: 'from-[#9BBD2D] to-[#7a9c24]',
      features: ['Fino al 65% di incentivo', 'Fino al 100% in alcuni casi', 'Rimborso diretto su conto corrente']
    }
  ];

  const benefits = [
    {
      icon: faHandHoldingUsd,
      title: 'Risparmio Economico',
      description: 'Accedi a finanziamenti a fondo perduto e detrazioni fiscali per ridurre i costi dei tuoi impianti'
    },
    {
      icon: faLeaf,
      title: 'Sostenibilità Ambientale',
      description: 'Contribuisci alla transizione energetica con fonti rinnovabili e riduzione delle emissioni'
    },
    {
      icon: faChartLine,
      title: 'Aumento del Valore',
      description: 'Migliora l&apos;efficienza energetica e il valore del tuo immobile con interventi incentivati'
    },
    {
      icon: faBolt,
      title: 'Energia Pulita',
      description: 'Produci energia autonoma e riduci la dipendenza dai combustibili fossili'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F49918]/5 to-[#9BBD2D]/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-gradient-combined">Bandi e Incentivi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Scopri tutte le opportunità di finanziamento disponibili per i tuoi progetti energetici. 
              LC Energia ti guida nell&apos;accesso agli incentivi nazionali e regionali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(to right, #e67e00, #cc6f00)',
                }}
              >
                Richiedi Consulenza
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Incentives Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Le Nostre <span className="text-gradient-combined">Opportunità</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accedi ai principali bandi e incentivi per la transizione energetica
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {incentives.map((incentive, index) => (
              <motion.div
                key={index}
                variants={cardEntrance}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={incentive.href} className="block h-full">
                  <div className={`bg-gradient-to-br ${incentive.color} rounded-2xl p-8 h-full text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                    {/* Decorative elements */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                          <FontAwesomeIcon icon={incentive.icon} className="text-3xl" />
                        </div>
                        <h3 className="text-2xl font-bold">{incentive.title}</h3>
                      </div>
                      
                      <p className="text-white/95 text-lg mb-6 leading-relaxed">
                        {incentive.description}
                      </p>
                      
                      <div className="space-y-2">
                        {incentive.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex items-center text-white font-semibold">
                        Scopri di più
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perché Scegliere gli <span className="text-gradient-combined">Incentivi</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I vantaggi di accedere ai bandi e incentivi per la transizione energetica
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardEntrance}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F49918] to-[#c27a12] rounded-xl flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={benefit.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F49918] to-[#c27a12] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Inizia la Tua Transizione Energetica
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Contattaci per scoprire quale incentivo è più adatto al tuo progetto. 
              Il nostro team di esperti ti guiderà in ogni fase del processo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#F49918] bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Richiedi Consulenza Gratuita
              </Link>
              <Link
                href="/azienda"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#F49918] transition-all duration-300"
              >
                Scopri LC Energia
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}