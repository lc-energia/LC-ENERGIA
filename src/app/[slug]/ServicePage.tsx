'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faBolt, faCog, faDraftingCompass, faTools, faCertificate } from '@fortawesome/free-solid-svg-icons';
import ServicePageLayout from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import FeatureCard from '@/components/FeatureCard';
import FaqAccordion from '@/components/FaqAccordion';
import SimpleTextCard from '@/components/SimpleTextCard';
import InfoAccordion from '@/components/InfoAccordion';
import ImageCarousel from '@/components/ImageCarousel';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Text } from '@/components/ui/Typography';

const ServicePage = ({ service, slug }: { service: ServiceData, slug: string }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <ServicePageLayout title={service.title}>
      <div className="text-center mx-auto mb-5">
        {slug === 'impianti-fotovoltaici' ? (
          <>
            <h6 className="text-primary font-bold text-lg uppercase">IL NOSTRO INTERVENTO</h6>
            <p className="lead">Progettiamo e installiamo impianti fotovoltaici &quot;chiavi in mano&quot; partendo da una valutazione preliminare che considera i seguenti elementi di base:</p>
          </>
        ) : slug === 'progettazione-e-consulenza-tecnica' ? (
          null // No mostrar introducción para progettazione-e-consulenza-tecnica, se maneja internamente
        ) : (
          <p className="lead" dangerouslySetInnerHTML={{ __html: service.introduction }}></p>
        )}
      </div>

      {service.mainFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {service.mainFeatures.map((feature, i) => (
            <SimpleTextCard key={i} feature={feature} i={i} />
          ))}
        </div>
      )}

      {slug === 'impianti-fotovoltaici' && (
        <div className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:col-span-1">
                <p className="text-xl text-dark-200 font-bold">
                  Grazie alla comunità energetica è possibile ricevere un incentivo per l&apos;energia immessa in rete e consumata all&apos;interno della Comunità Energetica Rinnovabile.
                </p>
              </div>
              <div className="lg:col-span-1">
                <ImageCarousel images={[
                  '/img/volta1.JPEG',
                  '/img/volta5.JPEG',
                  '/img/volta7.JPEG'
                ]} />
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === 'stazioni-di-ricarica' && (
        <div className="text-center my-5">
          <Image src="/img/scame.png" alt="Stazioni di Ricarica" width={500} height={500} className="mx-auto" />
        </div>
      )}

      <div className="grid grid-cols-1 gap-8">
        {slug === 'progettare-il-risparmio-energetico' ? (
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="grid grid-cols-1 gap-8">
                  {service.sections.map((section, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-neutral-100">
                        <h5 className="text-xl font-bold mb-3 text-dark-200">{section.title}</h5>
                        <p className="text-gray-600">{section.content}</p>
                        {section.list && (
                          <ul className="space-y-2 mt-4">
                            {section.list.map((item, j) => (
                              <li key={j} className="flex items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-1">
                <Image src="/img/lc2.jpg" alt="Progettare il Risparmio Energetico" width={500} height={500} className="w-full h-auto rounded-xl shadow-xl" />
              </div>
            </div>
          </div>
        ) : slug === 'contabilizzazione-calore-impianti-termici-centralizzati' ? (
          <div className="w-full">
            <div className="mb-8">
              <p className="text-lg text-gray-700">{service.sections[0].content}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="lg:col-span-1">
                <Image src="/img/cont1.jpg" alt="Contabilizzazione Calore" width={500} height={500} className="w-full h-auto rounded-xl shadow-xl" />
              </div>
              <div className="lg:col-span-1">
                <div className="grid grid-cols-1 gap-8">
                  {service.sections.slice(1).map((section, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-neutral-100">
                        <h5 className="text-xl font-bold mb-3 text-dark-200">{section.title}</h5>
                        <p className="text-gray-600">{section.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : slug === 'progettazione-antincendio' ? (
          (() => {
            const section = service.sections[0];
            const items = section.features;
            return (
              <div className="w-full">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-dark-200">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mt-2">{section.content}</p>}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 gap-8">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} />
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <Image src="/img/anticendio.jpg" alt="Progettazione Antincendio" width={500} height={500} className="w-full h-auto rounded-xl shadow-xl" />
                  </div>
                </div>
              </div>
            );
          })()
        ) : slug === 'progettazione-acustica' ? (
          (() => {
            const section = service.sections[0];
            const items = section.features;
            return (
              <div className="w-full">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-dark-200">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mt-2">{section.content}</p>}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 gap-8">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} />
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <Image src="/img/acustica.jpg" alt="Progettazione Acustica" width={500} height={500} className="w-full h-auto rounded-xl shadow-xl" />
                  </div>
                </div>
              </div>
            );
          })()
        ) : slug === 'impianti-geotermici' ? (
          (() => {
            const firstTwoSections = service.sections.slice(0, 2);
            const lastSection = service.sections[2];
            return (
              <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 gap-8">
                      {firstTwoSections.map((section, i) => (
                        <motion.div
                          key={i}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={cardVariants}
                        >
                          <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-neutral-100">
                            <h5 className="text-xl font-bold mb-3 text-dark-200">{section.title}</h5>
                            <p className="text-gray-600">{section.content}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <Image src="/img/geotermico-ok.jpg" alt="Impianti Geotermici" width={500} height={500} className="w-full h-auto rounded-xl shadow-xl" />
                  </div>
                </div>
                <div className="mt-8">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                      <div className="flex items-center mb-4">
                        <div className="flex-grow">
                          <h5 className="font-bold text-lg mb-0 text-dark-200">{lastSection.title}</h5>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2" dangerouslySetInnerHTML={{ __html: lastSection.content }}></div>
                      {lastSection.accordionItems && (
                        <div className="mt-4">
                          <InfoAccordion items={lastSection.accordionItems} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })()
        ) : slug === 'progettazione-e-consulenza-tecnica' ? (
          <div className="w-full max-w-6xl mx-auto py-8">
            {/* Introducción principal */}
            <section className="mb-12 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                custom={0}
              >
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Nella realizzazione di opere impiantistiche vi è la necessità di gestire le diverse fasi operative in modo da coordinare lo svolgimento dei lavori e garantire la funzionalità del prodotto finale.
                </p>
              </motion.div>
            </section>

            {/* Servicios principales - Diseño Vertical LC Energia */}
            <section className="mb-16">
              {/* Hero Section Creativo */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="text-center mb-12"
              >
                <div className="inline-block mb-6">
                  <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-full">
                    <div className="bg-white p-6 rounded-full">
                      <FontAwesomeIcon icon={faDraftingCompass} className="fa-3x text-primary" />
                    </div>
                  </div>
                </div>
                <Heading1 color="primary" className="mb-4 font-bold text-center">Servizi di Progettazione e Consulenza</Heading1>
                <Text color="muted" size="lg" className="max-w-4xl mx-auto leading-relaxed">
                  LC Energia offre soluzioni integrate per la progettazione impiantistica civile e industriale, combinando esperienza tecnica e innovazione tecnologica.
                </Text>
              </motion.div>

              {/* Secciones en grid 2x2 */}
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* 1. Impianti Elettrici - Fondo Naranja */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full" style={{
                    background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%)'
                  }}>
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white">Impianti Elettrici</Heading1>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Impianti elettrici civili ed industriali",
                        "Sistemi domotici",
                        "Building Automation",
                        "Impianti di illuminazione"
                      ].map((item, j) => (
                        <motion.div
                          key={j}
                          className="group relative pl-8 py-2 bg-white/10 rounded-lg border-l-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-500"
                          whileHover={{ x: 8 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + j * 0.1 }}
                        >
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white group-hover:bg-white/90 group-hover:scale-125 transition-all duration-500 shadow-white/20" />
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gradient-to-b from-white/80 via-white/50 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500" />

                          <Text color="white" className="font-medium leading-tight">{item}</Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 2. Progettazione Impiantistica - Fondo Naranja */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full" style={{
                    background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%)'
                  }}>
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white">Progettazione Impiantistica</Heading1>
                    </div>
                    <Text color="white" size="lg" className="leading-relaxed mb-6">
                      Per ogni tipologia edilizia, l&apos;impianto rappresenta una struttura vitale per la gestione e la fruibilità dell&apos;intero edificio. La qualità della progettazione influisce su sicurezza, comfort, risparmio e manutenzione.
                    </Text>
                  </div>
                </motion.div>

                {/* 3. Impianti Meccanici - Fondo Naranja */}
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full" style={{
                    background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%)'
                  }}>
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white">Impianti Meccanici</Heading1>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Impianti di riscaldamento, climatizzazione, ventilazione meccanica",
                        "Impianti alimentati da fonti rinnovabili (geotermia, solare termico termodinamico/fotovoltaico)",
                        "Impianti di cogenerazione",
                        "Impianti a biomassa"
                      ].map((item, j) => (
                        <motion.div
                          key={j}
                          className="group relative pl-8 py-2 bg-white/10 rounded-lg border-l-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-500"
                          whileHover={{ x: 8 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 + j * 0.1 }}
                        >
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white group-hover:bg-white/90 group-hover:scale-125 transition-all duration-500 shadow-white/20" />
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gradient-to-b from-white/80 via-white/50 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500" />

                          <Text color="white" className="font-medium leading-tight">{item}</Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 4. Progettazione e Consulenza Tecnica - Fondo Naranja especial */}
                <motion.div
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="rounded-2xl p-8 border-l-4 border-white hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full" style={{
                    background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%)'
                  }}>
                    {/* Efecto decorativo */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>

                    <div className="relative z-10">
                      <div className="mb-6">
                        <Heading1 color="white" className="font-bold !text-white">Progettazione e Consulenza Tecnica</Heading1>
                      </div>
                      <Text color="white" size="lg" className="font-semibold mb-4">
                        LC Energia gestisce direttamente, con personale qualificato, attraverso le diverse fasi di progettazione:
                      </Text>
                      <div className="space-y-3">
                        {[
                          "Progettazione integrata degli impianti con collaborazione costante con le altre figure professionali coinvolte.",
                          "Definizione della tipologia di impianto in relazione alla struttura, con sistemi di controllo e monitoraggio on-site e remoto.",
                          "Assistenza ai lavori per perseguire e conseguire il risultato previsto nelle fasi di progettazione ed esecuzione.",
                          "Assistenza al collaudo delle opere e la loro certificazione."
                        ].map((item, j) => (
                          <motion.div
                            key={j}
                            className="group relative pl-8 py-2 bg-white/10 rounded-lg border-l-2 border-white/30 hover:border-white hover:bg-white/20 transition-all duration-500"
                            whileHover={{ x: 8 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + j * 0.1 }}
                          >
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white group-hover:bg-white/90 group-hover:scale-125 transition-all duration-500 shadow-white/20" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gradient-to-b from-white/80 via-white/50 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500" />

                            <Text color="white" className="font-medium leading-tight">{item}</Text>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Impianti Speciali */}
            <section className="mb-12">
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="text-center mb-8">
                  <FontAwesomeIcon icon={faTools} className="fa-3x text-secondary mb-4" />
                  <Heading1 color="primary" className="font-bold text-center">Impianti Speciali</Heading1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                  {[
                    "Impianti di rivelazione incendio",
                    "Impianti TVCC",
                    "Impianti antintrusione",
                    "Impianti scariche atmosferiche",
                    "Impianti telefonici e trasmissione dati",
                    "Impianti EVAC",
                    "Quadri elettrici",
                    "Illuminazione di sicurezza",
                    "Impianti tecnologici",
                    "Diffusione sonora",
                    "Impianti di videoproiezione",
                    "Impianti di conversazione",
                    "TV digitale terrestre e satellitare",
                    "Rifasamento elettrico"
                  ].map((item, j) => (
                    <motion.div
                      key={j}
                      className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-secondary hover:shadow-md transition-all duration-150 group cursor-pointer relative overflow-hidden"
                      whileHover={{
                        x: 8,
                        background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%)'
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: j * 0.02 }}
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 transition-all duration-150"></div>
                      <p className="text-xs text-gray-700 leading-tight relative z-10 group-hover:text-white transition-colors duration-150">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Collaudi e Certificazioni */}
            <section>
              <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="text-center">
                  <FontAwesomeIcon icon={faCertificate} className="fa-3x text-gray-400 mb-4" />
                  <Heading1 color="primary" className="font-bold text-center mb-4">Collaudi e certificazioni</Heading1>
                  <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Collaudi e start-up degli impianti meccanici ed elettrici civili ed industriali. Redazione di Dichiarazioni di rispondenza per impianti antecedenti il D.M. 37/08.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        ) : slug === 'impianti-fotovoltaici' ? (
          <InfoAccordion items={service.sections} />
        ) : (
          service.sections.map((section, i) => {
            if (section.modes || section.features) {
              const items = section.modes || section.features;
              const featureCardGridClass = (slug === 'progettazione-acustica' || slug === 'progettazione-antincendio')
                ? 'grid-cols-1 md:grid-cols-2 gap-8'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

              return (
                <div className="w-full" key={i}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-dark-200">{section.title}</h2>
                    {section.content && <p className="text-lg text-gray-600 mt-2">{section.content}</p>}
                  </div>
                  <div className={`grid ${featureCardGridClass}`}>
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} i={i + j} />
                    ))}
                  </div>
                </div>
              );
            }
            if (section.title === 'FAQ') {
              return <FaqAccordion key={i} faqs={section.questions || []} />;
            }

            return (
              <motion.div
                key={i}
                className={section.fullWidth ? 'lg:col-span-2' : 'lg:col-span-1'}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                  <div className="flex items-center mb-4">
                    {!section.hideLogo && (
                      <div className="flex-shrink-0">
                        <Image src="/img/logo.png" alt="icon" width={40} height={40} style={{ height: 'auto' }} />
                      </div>
                    )}
                    <div className="flex-grow ml-4">
                      <h5 className="font-bold text-lg mb-0 text-dark-200">{section.title}</h5>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-2" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  {section.list && (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.accordionItems && (
                    <div className="mt-4">
                      <InfoAccordion items={section.accordionItems} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {service.partners && (
        <div className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-auto mb-12">
              <h6 className="text-primary font-bold text-lg uppercase mb-2">{service.partnersTitle}</h6>
              <p className="text-lg text-gray-600">{service.partnersIntroduction}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {service.partners.map((partner, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="w-full"
                >
                  <div className="flex justify-center items-center h-full p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <Image src={partner.src} alt={partner.alt} width={150} height={150} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ServicePageLayout>
  );
};

export default ServicePage;