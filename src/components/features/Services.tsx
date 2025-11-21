'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, cardEntrance, iconPop, viewportSettings } from '@/lib/animation-variants';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import TiltCard from '@/components/business/TiltCard';
import GlassmorphismCard from '@/components/business/GlassmorphismCard';
import {
  faGlobe,
  faTools,
  faFireExtinguisher,
  faSolarPanel,
  faHeadphones,
  faWallet,
  faThermometerHalf,
  faLightbulb,
  faArrowRight,
  faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  filter: string;
  icon: IconDefinition;
  title: string;
  description: string;
  link: string;
  specialBox?: string;
}

const Services = () => {
  const [filter, setFilter] = useState('third');

  const services: Service[] = [
    {
      filter: "third",
      icon: faGlobe,
      title: "Impianto Geotermico",
      description: "LC Energia da diversi anni realizza impianti che utilizzano fonti alternative, in particolare impianti geotermici puri o integrati con altri sistemi di produzione dell’energia, nell’ambito di una politica di ricerca della massima soddisfazione del cliente.",
      link: "/impianti-geotermici"
    },
    {
      filter: "third",
      icon: faTools,
      title: "Progettazione e consulenza tecnica",
      description: "Da oltre 25 anni offriamo un servizio di consulenza, progettazione e supporto nelle realizzazioni impiantistiche civili ed industriali. Ogni soluzione è valutata e condivisa nel rispetto delle esigenze del committente.",
      link: "/progettazione-e-consulenza-tecnica"
    },
    {
      filter: "third",
      icon: faFireExtinguisher,
      title: "Progettazione Antincendio",
      description: "LC Energia offre consulenza e progettazione antincendio, con impianti di estinzione fissi ad idranti e sprinkler, evacuatori di fumo e calore.",
      link: "/progettazione-antincendio"
    },
    {
      filter: "second",
      icon: faSolarPanel,
      title: "Impianto Fotovoltaico e Accumulo Elettrico",
      description: "Progettiamo e installiamo impianti fotovoltaici chiavi in mano per ridurre i consumi energetici grazie all’autoproduzione di energia elettrica.",
      link: "/impianti-fotovoltaici"
    },
    {
      filter: "third",
      icon: faHeadphones,
      title: "Progettazione Acustica",
      description: "L’inquinamento acustico rappresenta uno dei problemi più rilevanti per la società attuale e per le attività produttive; esso è definito dalla Legge Quadro 447/95.",
      link: "/progettazione-acustica"
    },
    {
      filter: "third",
      icon: faWallet,
      title: "Progettare il risparmio energetico",
      description: "LC Energia propone costantemente soluzioni tecniche innovative per ottenere il massimo risparmio energetico dai sistemi progettati.",
      link: "/progettare-il-risparmio-energetico"
    },
    {
      filter: "third",
      icon: faThermometerHalf,
      title: "Contabilizzazione e ripartizione del calore",
      description: "Progettiamo sistemi di contabilizzazione e ripartizione del calore per edifici costituiti da più unità immobiliari.",
      link: "/contabilizzazione-calore-impianti-termici-centralizzati"
    },
    {
      filter: "first",
      icon: faTools,
      title: "Diagnosi Energetica e Riqualificazione Centrali Termiche",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto al fine di valutare e proporre soluzioni sostenibili per la riqualificazione energetica sotto il profilo tecnico/economico.",
      link: "/riqualificazione-di-centrali-termiche-esistenti"
    },
    {
      filter: "second",
      icon: faLightbulb,
      title: "Stazioni di Ricarica",
      description: "Attraverso la nostra esperienza e con i software di calcolo possiamo identificare le principali criticità del sistema edificio/impianto al fine di valutare e proporre soluzioni sostenibili per la riqualificazione energetica sotto il profilo tecnico/economico.",
      link: "/stazioni-di-ricarica"
    },
    {
      filter: "fourth",
      icon: faHandHoldingUsd,
      title: "Contributo PNRR",
      description: "Ottieni il 40% a fondo perduto per impianti fotovoltaici nelle Comunità Energetiche Rinnovabili.",
      link: "/contributo-pnrr"
    },
    {
      filter: "fourth",
      icon: faHandHoldingUsd,
      title: "Conto Termico 3.0",
      description: "Incentivi fino al 65% per la produzione di energia termica da fonti rinnovabili. Fino al 100% in alcuni casi per edifici pubblici e scuole.",
      link: "/conto-termico"
    }
  ];

  const filteredServices = filter === '*' ? services : services.filter(service => service.filter === filter);

  const filterButtons = [
    { name: 'Progettazione', value: 'third' },
    { name: 'Impianti', value: 'second' },
    { name: 'Studio', value: 'first' },
    { name: 'Bandi e Incentivi', value: 'fourth' },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección con animación */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mx-auto mb-16"
          style={{ maxWidth: '800px' }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient-combined animate-pulse-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I Nostri Servizi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluzioni integrate e innovative per l&apos;efficienza energetica e la sostenibilità ambientale
          </motion.p>
        </motion.div>

        {/* Filter Buttons - Mejorados con colores institucionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <ul className="flex flex-wrap items-center gap-3 justify-center">
            {filterButtons.map((button, index) => (
              <motion.li
                key={button.value}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <motion.button
                  onClick={() => setFilter(button.value)}
                  className={`relative overflow-hidden font-semibold py-3 px-8 rounded-full transition-all duration-300 ${
                    filter === button.value
                      ? 'bg-gradient-primary text-white shadow-primary-hover'
                      : 'bg-white text-gray-700 hover:bg-gradient-combined hover:text-white hover:shadow-combined border border-neutral-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Ripple effect on tap */}
                  <motion.span
                    className="absolute inset-0 bg-white/30 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileTap={{
                      scale: 2,
                      opacity: [0, 0.5, 0],
                      transition: { duration: 0.4 },
                    }}
                  />
                  <span className="relative z-10">{button.name}</span>
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services Grid - Mejorado con animaciones más dinámicas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                variants={cardEntrance}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full group"
              >
                <TiltCard intensity={12} scale={1.03}>
                  <GlassmorphismCard
                    variant="default"
                    rounded="xl"
                    className="h-full flex flex-col group cursor-pointer hover-lift hover-shine relative overflow-hidden bg-white/90 backdrop-blur-md border border-white/20"
                  >
                    {/* Efecto de gradiente animado en el borde */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-combined opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                    {/* Shimmer effect - Best practice 2025 */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    />

                     <div className="p-8 flex-grow relative z-10">
                       {/* Icon Background mejorado con colores institucionales */}
                       <motion.div
                         className="absolute top-8 right-8 w-16 h-16 rounded-full flex items-center justify-center"
                         variants={iconPop}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                       >
                         <div className="absolute inset-0 bg-gradient-combined rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 animate-pulse-soft" />
                         <div className="relative w-14 h-14 bg-gradient-combined rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-combined">
                           <FontAwesomeIcon icon={service.icon} className="text-white text-xl drop-shadow-lg" />
                         </div>
                       </motion.div>

                       <div className="mb-6">
                         <h3 className="text-xl font-bold text-dark-200 mb-4 pr-20 group-hover:text-primary-600 transition-colors duration-300">
                           {service.title}
                         </h3>
                         <p className="text-gray-600 leading-relaxed text-sm">
                           {service.description}
                         </p>
                       </div>

                        {/* Special Box para información destacada */}
                        {service.specialBox && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-4"
                          >
                            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 border border-primary/20 backdrop-blur-sm">
                              <div className="text-primary-700 leading-relaxed text-sm font-medium">
                                {service.specialBox}
                              </div>
                            </div>
                          </motion.div>
                        )}
                     </div>

                    {/* Footer mejorado */}
                    <div className="p-8 border-t border-gradient-combined/10 bg-gradient-to-r from-primary-50/50 to-secondary-50/50 backdrop-blur-sm relative z-10">
                      <Link
                        href={service.link}
                        className="inline-flex items-center font-bold text-primary-600 hover:text-secondary-600 transition-all duration-300 group/link"
                      >
                        <span className="relative">
                          Scopri di più
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-combined group-hover/link:w-full transition-all duration-300" />
                        </span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </motion.div>
                      </Link>
                    </div>
                  </GlassmorphismCard>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
