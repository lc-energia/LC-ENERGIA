'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto mb-12"
          style={{ maxWidth: '600px' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F49918]">I Nostri Servizi</h1>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex justify-center mb-10"
        >
          <ul className="flex flex-wrap items-center space-x-2 sm:space-x-4">
            {filterButtons.map(button => (
              <li
                key={button.value}
                onClick={() => setFilter(button.value)}
                className={`cursor-pointer font-medium py-2 px-4 rounded-full transition-colors duration-300 ${
                  filter === button.value
                    ? 'bg-[#F49918] text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#F49918] hover:text-white'
                }`}
              >
                {button.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.title}
                layout
                variants={fadeIn('up', 0)} // Delay is now controlled by parent's staggerChildren
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                className="w-full"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="p-6 flex-grow">
                    <div className="text-[#F49918] mb-4">
                      <FontAwesomeIcon icon={service.icon} className="text-4xl" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-[#1A2A36]">{service.title}</h4>
                    <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <Link href={service.link} className="font-medium text-[#F49918] hover:text-orange-700 transition-colors">
                      Leggi di più <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
