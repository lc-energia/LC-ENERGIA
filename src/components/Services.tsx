'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/Card';
import TiltCard from '@/components/TiltCard';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import {
  faGlobe, 
  faTools, 
  faFireExtinguisher, 
  faSolarPanel, 
  faHeadphones, 
  faWallet, 
  faThermometerHalf, 
  faLightbulb, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  filter: string;
  icon: IconDefinition;
  title: string;
  description: string;
  link: string;
}

const Services = () => {
  const [filter, setFilter] = useState('*');

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
    }
  ];

  const filteredServices = filter === '*' ? services : services.filter(service => service.filter === filter);

  const filterButtons = [
    { name: 'Tutto', value: '*' },
    { name: 'Progettazione', value: 'third' },
    { name: 'Impianti', value: 'second' },
    { name: 'Studio', value: 'first' },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto mb-16"
          style={{ maxWidth: '800px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-200 mb-4">I Nostri Servizi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluzioni integrate e innovative per l&apos;efficienza energetica e la sostenibilità ambientale
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex justify-center mb-8"
        >
          <ul className="flex flex-wrap items-center gap-3">
            {filterButtons.map(button => (
              <li key={button.value}>
                <button
                  onClick={() => setFilter(button.value)}
                  className={`font-medium py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 ${
                    filter === button.value
                      ? 'bg-[#7db042] text-white shadow-lg'
                      : 'bg-[#f3f4f6] text-[#374151] hover:bg-[#7db042] hover:text-white hover:shadow-md'
                  }`}
                >
                  {button.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full group"
              >
                <TiltCard intensity={12} scale={1.02}>
                  <GlassmorphismCard
                    variant="default"
                    rounded="xl"
                    className="h-full flex flex-col group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="p-8 flex-grow relative">
                      {/* Icon Background with glassmorphism effect */}
                      <div className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-[#7db042]/30 shadow-lg">
                        <div className="w-11 h-11 bg-gradient-to-br from-[#7db042] via-[#99c34a] to-[#e67e00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                          <FontAwesomeIcon icon={service.icon} className="text-white text-lg drop-shadow-lg" />
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-dark-200 mb-4 pr-16">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="p-8 border-t border-white/20 bg-white/10 backdrop-blur-sm">
                      <Link
                        href={service.link}
                        className="inline-flex items-center font-semibold text-primary hover:text-primary-600 transition-colors duration-300 group/link"
                      >
                        Scopri di più
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2"
                        />
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
