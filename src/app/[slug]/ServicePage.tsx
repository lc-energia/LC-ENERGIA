'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTools, faCertificate, faInfoCircle, faChartLine, faEuroSign, faHandsHelping, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import ServicePageLayout from '@/components/layout/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services';
import FeatureCard from '@/components/business/FeatureCard';
import FaqAccordion from '@/components/business/FaqAccordion';
import AnimatedTextCycle from '@/components/shared/AnimatedTextCycle';
import InfoAccordion from '@/components/business/InfoAccordion';
import ImageCarousel from '@/components/business/ImageCarousel';
import { Heading1, Text } from '@/components/ui/Typography';
import { fadeInUp, staggerContainer, cardEntrance, iconPop, viewportSettings } from '@/lib/animation-variants';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceIntro from '@/components/business/services/ServiceIntro';
import ServicePartners from '@/components/business/services/ServicePartners';
import ContoTermicoService from '@/components/business/services/ContoTermicoService';

// Helper para limpiar HTML
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

const ServicePage = ({ service, slug }: { service: ServiceData, slug: string }) => {
  const iconMap: { [key: string]: IconDefinition } = {
    'fa-info-circle': faInfoCircle,
    'fa-chart-line': faChartLine,
    'fa-euro-sign': faEuroSign,
    'fa-hands-helping': faHandsHelping,
    'fa-check-circle': faCheckCircle,
  };

  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    "Cos'è il contributo PNRR?": true,
    "Perché investire oggi? Come accedere e requisiti": false,
    "Cosa copre il PNRR?": false,
    "Il nostro supporto:": false
  });

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  // Preparar datos para schemas SEO
  const cleanDescription = stripHtml(service.introduction).substring(0, 160);
  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.lcenergia.it' },
    { name: service.breadcrumb, url: `https://www.lcenergia.it/${slug}` }
  ];

  return (
    <>
      {/* SEO: Structured Data (JSON-LD) */}
      <ServiceSchema
        name={service.title}
        description={cleanDescription}
        slug={slug}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServicePageLayout title={service.title}>
      {/* Intro Section - Modularized */}
      <ServiceIntro slug={slug} introduction={service.introduction} />

      {/* Special intro for conto-termico */}
      {slug === 'conto-termico' && <ContoTermicoService service={service} />}

      {/* Special intro for stazioni-di-ricarica */}
      {slug === 'stazioni-di-ricarica' && (
        <motion.div
          className="text-center mx-auto mb-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <div className="bg-gradient-to-r from-[#F49918] to-[#c27a12] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="text-white/95 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
            </div>
          </div>
        </motion.div>
      )}

      {service.mainFeatures && (
        <motion.div className="max-w-4xl mx-auto text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportSettings}>
          <AnimatedTextCycle texts={service.mainFeatures.map(f => f.text)} />
        </motion.div>
      )}

       {slug === 'impianti-fotovoltaici' && (
         <div className="py-12 sm:py-16 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <motion.div
                 className="lg:col-span-1"
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportSettings}
               >
                 <p className="text-xl text-gradient-combined font-bold leading-relaxed">
                   Grazie alla comunità energetica è possibile ricevere un incentivo per l&apos;energia immessa in rete e consumata all&apos;interno della Comunità Energetica Rinnovabile.
                 </p>
               </motion.div>
               <motion.div
                 className="lg:col-span-1"
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportSettings}
               >
                 <ImageCarousel images={[
                   '/img/volta1.JPEG',
                   '/img/volta5.JPEG',
                   '/img/volta7.JPEG'
                 ]} />
               </motion.div>
             </div>
           </div>
         </div>
       )}

       {slug === 'stazioni-di-ricarica' && (
        <motion.div
          className="text-center my-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <Image src="/img/scame.png" alt="Stazioni di Ricarica" width={500} height={500} className="mx-auto hover-lift transition-smooth" loading="lazy" />
        </motion.div>
      )}

      {/* Section Rendering - Skip for conto-termico as it's handled by ContoTermicoService */}
      {slug !== 'conto-termico' && (slug === 'progettazione-antincendio' ? (
        (() => {
          const section = service.sections[0];
          const items = section.features;
          return (
            <div className="w-full">
              {/* Cuadro con introduction */}
              <motion.div
                className="mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#F49918]/20">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F49918]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="text-center mb-8 w-full"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <h2 className="text-3xl font-bold text-gradient-combined mb-4" style={{textAlign: 'center'}}>{section.title}</h2>
                {section.content && <p className="text-lg text-gray-600 mt-2 leading-relaxed" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>{section.content}</p>}
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="lg:col-span-1"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="grid grid-cols-1 gap-8">
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} i={j} />
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="lg:col-span-1"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <Image src="/img/anticendio.jpg" alt="Progettazione Antincendio" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                </motion.div>
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
              {/* Cuadro con introduction */}
              <motion.div
                className="mb-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="text-center mb-8 w-full"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <h2 className="text-3xl font-bold text-gradient-combined mb-4" style={{textAlign: 'center'}}>{section.title}</h2>
                {section.content && <p className="text-lg text-gray-600 mt-2 leading-relaxed" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>{section.content}</p>}
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="lg:col-span-1"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="grid grid-cols-1 gap-8">
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} i={j} />
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="lg:col-span-1"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <Image src="/img/acustica.jpg" alt="Progettazione Acustica" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                </motion.div>
              </div>
            </div>
          );
        })()
      ) : slug === 'progettare-il-risparmio-energetico' ? (
          <div className="w-full">
            {/* Cuadro con introduction */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                className="lg:col-span-1"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <div className="grid grid-cols-1 gap-8">
                  {service.sections.map((section, i) => (
                    <motion.div
                      key={i}
                      variants={cardEntrance}
                    >
                      <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                        <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
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
                         {section.incentives && (
                           <motion.div
                             className="grid grid-cols-1 gap-4 mt-6"
                             variants={staggerContainer}
                             initial="hidden"
                             whileInView="visible"
                             viewport={viewportSettings}
                           >
                             {section.incentives.map((incentive, j) => (
                               <motion.div
                                 key={j}
                                 variants={cardEntrance}
                                 className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
                               >
                                 <h6 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-700 transition-colors">
                                   {incentive.title}
                                 </h6>
                                 <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                                   {incentive.description}
                                 </p>
                                 <Link
                                   href={incentive.link}
                                   className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors text-sm group/link"
                                 >
                                   Scopri di più
                                   <motion.div
                                     className="ml-2"
                                     animate={{ x: [0, 3, 0] }}
                                     transition={{ duration: 1.5, repeat: Infinity }}
                                   >
                                     →
                                   </motion.div>
                                 </Link>
                               </motion.div>
                             ))}
                           </motion.div>
                         )}
                       </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="lg:col-span-1"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <Image src="/img/lc2.jpg" alt="Progettare il Risparmio Energetico" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
              </motion.div>
            </div>
          </div>
         ) : slug === 'contabilizzazione-calore-impianti-termici-centralizzati' ? (
          <div className="w-full">
            {/* Cuadro con introduction */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#F49918]/20">
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F49918]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.sections[0].content }}></div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <motion.div
                className="lg:col-span-1"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <Image src="/img/cont1.jpg" alt="Contabilizzazione Calore" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
              </motion.div>
              <motion.div
                className="lg:col-span-1"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <div className="grid grid-cols-1 gap-8">
                  {service.sections.slice(1).map((section, i) => (
                    <motion.div
                      key={i}
                      variants={cardEntrance}
                    >
                      <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-secondary-100 transition-smooth">
                        <h5 className="text-xl font-bold mb-3 text-gradient-secondary">{section.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{section.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
           </div>
         ) : slug === 'riqualificazione-di-centrali-termiche-esistenti' ? (
          <div className="w-full">
            {/* Cuadro con introduction */}
            <motion.div
              className="mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {service.sections.map((section, i) => (
                <motion.div
                  key={i}
                  className="lg:col-span-1"
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-[#F49918] to-[#e68900] rounded-xl shadow-xl hover:shadow-2xl p-8 h-full border border-[#F49918]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
                    {/* Efecto decorativo */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
                    
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <h5 className="text-2xl font-bold mb-4 text-white">{section.title}</h5>
                      <p className="text-white/95 leading-relaxed mb-4">{section.content}</p>
                      {section.list && (
                        <ul className="space-y-3 mt-4">
                          {section.list.map((item, j) => (
                            <li key={j} className="flex items-start group/item">
                              <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-white/30 transition-colors">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                              </div>
                              <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
         ) : slug === 'progettazione-antincendio' ? (
          (() => {
            const section = service.sections[0];
            const items = section.features;
            return (
              <div className="w-full">
                {/* Cuadro con introduction */}
                <motion.div
                  className="mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#F49918]/20">
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F49918]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <h2 className="text-3xl font-bold text-gradient-combined mb-4">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mt-2 leading-relaxed">{section.content}</p>}
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    className="lg:col-span-1"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <div className="grid grid-cols-1 gap-8">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    className="lg:col-span-1"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <Image src="/img/anticendio.jpg" alt="Progettazione Antincendio" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                  </motion.div>
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
                {/* Cuadro con introduction */}
                <motion.div
                  className="mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="text-center mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <h2 className="text-3xl font-bold text-gradient-combined mb-4">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mt-2 leading-relaxed">{section.content}</p>}
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    className="lg:col-span-1"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <div className="grid grid-cols-1 gap-8">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} />
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    className="lg:col-span-1"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <Image src="/img/acustica.jpg" alt="Progettazione Acustica" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                  </motion.div>
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
                {/* Cuadro con introduction */}
                <motion.div
                  className="mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#9BBD2D]/20">
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9BBD2D]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    className="lg:col-span-1"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <div className="grid grid-cols-1 gap-8">
                      {firstTwoSections.map((section, i) => (
                        <motion.div
                          key={i}
                          variants={cardEntrance}
                        >
                          <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                            <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    className="lg:col-span-1"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <Image src="/img/geotermico-ok.jpg" alt="Impianti Geotermici" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                  </motion.div>
                </div>
                <motion.div
                  className="mt-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-secondary-100 transition-smooth">
                    <div className="flex items-center mb-4">
                      <div className="flex-grow">
                        <h5 className="font-bold text-lg mb-0 text-gradient-combined">{lastSection.title}</h5>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 space-y-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: lastSection.content }}></div>
                    {lastSection.accordionItems && (
                      <div className="mt-4">
                        <InfoAccordion items={lastSection.accordionItems} />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })()
        ) : slug === 'progettazione-e-consulenza-tecnica' ? (
          <div className="w-full max-w-6xl mx-auto py-4">
             {/* Introducción principal */}
             <section className="mb-6 text-center">
               <motion.div
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportSettings}
               >
                 <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-[#F49918]/20 max-w-4xl mx-auto">
                   {/* Efecto de brillo */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F49918]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                   <div className="relative z-10">
                     <p className="text-lg text-gray-600 leading-relaxed text-justify">
                       Nella realizzazione di opere impiantistiche vi è la necessità di gestire le diverse fasi operative in modo da coordinare lo svolgimento dei lavori e garantire la funzionalità del prodotto finale. <br></br><br></br> LC Energia offre soluzioni integrate per la progettazione impiantistica civile e industriale, combinando esperienza tecnica e innovazione tecnologica.
                     </p>
                   </div>
                 </div>
               </motion.div>
             </section>

            {/* Servicios principales - Diseño Vertical LC Energia */}
            <section className="mb-8">
              {/* Hero Section Creativo */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="text-center mb-12"
              >
              
                
                
              </motion.div>

              {/* Secciones en grid 2x2 */}
              <motion.div
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                {/* 1. Impianti Elettrici - Fondo Naranja */}
                <motion.div
                  variants={cardEntrance}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full bg-gradient-secondary">
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white text-left">Impianti Elettrici</Heading1>
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

                           <Text color="white" justify={false} className="font-medium leading-tight text-left">{item}</Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 2. Progettazione Impiantistica - Fondo Naranja */}
                <motion.div
                  variants={cardEntrance}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full bg-gradient-secondary">
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white text-left">Progettazione Impiantistica</Heading1>
                    </div>
                    <Text color="white" justify={false} size="lg" className="leading-relaxed mb-6 text-left">
                      Per ogni tipologia edilizia, l&apos;impianto rappresenta una struttura vitale per la gestione e la fruibilità dell&apos;intero edificio. La qualità della progettazione influisce su sicurezza, comfort, risparmio e manutenzione.
                    </Text>
                  </div>
                </motion.div>

                {/* 3. Impianti Meccanici - Fondo Naranja */}
                <motion.div
                  variants={cardEntrance}
                >
                  <div className="rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl h-full bg-gradient-secondary">
                    <div className="mb-6">
                      <Heading1 color="white" className="font-bold !text-white text-left">Impianti Meccanici</Heading1>
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

                           <Text color="white" justify={false} className="font-medium leading-tight text-left">{item}</Text>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* 4. Progettazione e Consulenza Tecnica - Fondo Naranja especial */}
                <motion.div
                  variants={cardEntrance}
                >
                  <div className="rounded-2xl p-8 border-l-4 border-white hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full bg-gradient-secondary">
                    {/* Efecto decorativo */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full"></div>

                    <div className="relative z-10">
                      <div className="mb-6">
                        <Heading1 color="white" className="font-bold !text-white text-left">Progettazione e Consulenza Tecnica</Heading1>
                      </div>
                      <Text color="white" justify={false} size="lg" className="font-semibold mb-4 text-left">
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

                           <Text color="white" justify={false} className="font-medium leading-tight text-left">{item}</Text>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>

             {/* Impianti Speciali */}
             <section className="mb-12">
               <motion.div
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportSettings}
               >
                 <div className="text-center mb-8">
                   <motion.div
                     variants={iconPop}
                     initial="hidden"
                     whileInView="visible"
                   >
                     <FontAwesomeIcon icon={faTools} className="fa-3x text-secondary mb-4" />
                   </motion.div>
                   <Heading1 color="primary" className="font-bold text-center">Impianti Speciali</Heading1>
                 </div>
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
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
                      variants={cardEntrance}
                      className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-secondary hover:shadow-md transition-smooth group cursor-pointer relative overflow-hidden"
                      whileHover={{ x: 8, scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 transition-smooth"></div>
                      <p className="text-xs text-gray-700 leading-tight relative z-10 group-hover:text-primary transition-colors duration-150">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </section>

             {/* Collaudi e Certificazioni */}
             <section>
               <motion.div
                 variants={fadeInUp}
                 initial="hidden"
                 whileInView="visible"
                 viewport={viewportSettings}
               >
                 <div className="text-center">
                   <motion.div
                     variants={iconPop}
                     initial="hidden"
                     whileInView="visible"
                   >
                     <FontAwesomeIcon icon={faCertificate} className="fa-3x text-secondary mb-4" />
                   </motion.div>
                   <Heading1 color="primary" className="font-bold text-center mb-4">Collaudi e certificazioni</Heading1>
                   <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
                     Collaudi e start-up degli impianti meccanici ed elettrici civili ed industriali. Redazione di Dichiarazioni di rispondenza per impianti antecedenti il D.M. 37/08.
                   </p>
                 </div>
               </motion.div>
             </section>
          </div>
         ) : slug === 'impianti-fotovoltaici' ? (
           <InfoAccordion items={service.sections} image="/img/fotovoltaico.jpg" />
         ) : (
          service.sections.map((section, i) => {
            if (section.modes || section.features) {
              const items = section.modes || section.features;
              const featureCardGridClass = (slug === 'progettazione-acustica' || slug === 'progettazione-antincendio')
                ? 'grid-cols-1 md:grid-cols-2 gap-8'
                : (slug === 'stazioni-di-ricarica' && section.title === 'Vantaggi')
                ? 'grid-cols-1 md:grid-cols-2 gap-8'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

            return (
              <div key={i} className="w-full">
                {/* Cuadro con introduction - solo para servicios específicos */}
                {slug !== 'stazioni-di-ricarica' && (
                  <motion.div
                    className="mb-8"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    <div className="bg-gradient-to-r from-[#F49918] to-[#c27a12] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <div className="text-white/95 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.introduction }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <motion.div
                  className="text-center mb-8"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <h2 className="text-3xl font-bold text-gradient-combined mb-4">{section.title}</h2>
                  {section.content && <p className="text-lg text-gray-600 mt-2 leading-relaxed">{section.content}</p>}
                </motion.div>
                  <motion.div
                    className={`grid ${featureCardGridClass}`}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportSettings}
                  >
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} i={i + j} />
                    ))}
                  </motion.div>
                </div>
              );
            }
            if (section.title === 'FAQ') {
              return <FaqAccordion key={i} faqs={section.questions || []} />;
            }

            // Diseño especial para Vantaggi en stazioni-di-ricarica
            if (slug === 'stazioni-di-ricarica' && section.title === 'Vantaggi') {
              return (
                <motion.div
                  key={i}
                  className="w-full mb-16"
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative group">
                    {/* Efectos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F49918]/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
                    
                     <div className="relative z-10 p-6 lg:p-8">
                       {/* Header sin icono */}
                       <div className="mb-6">
                         <h2 className="text-2xl font-bold text-gray-800 text-center">{section.title}</h2>
                       </div>
                      
                      {/* Contenido con mejor formato */}
                      <div className="prose prose-lg max-w-none">
                        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                          <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Diseño especial para las secciones de Conto Termico - Con imagen en primera sección
            if (slug === 'conto-termico' && section.title === 'Cos\'è, come funziona e come accedere agli incentivi') {
              return (
                <motion.div
                  key={i}
                  className="w-full mb-8"
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      className="lg:col-span-1"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                    >
                      <Image src="/img/conto termicp.jpg" alt="Conto Termico 3.0" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                    </motion.div>
                    <motion.div
                      className="lg:col-span-1"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                    >
                      <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                        <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                        <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            }

            // Skip Come si recupera l'incentivo? as it's rendered manually above
            if (slug === 'conto-termico' && section.title === 'Come si recupera l\'incentivo?') {
              return null;
            }

            // Diseño especial para Conto Termico - Sección con imagen
            if (slug === 'conto-termico' && section.title === 'Cos\'è, come funziona e come accedere agli incentivi') {
              return (
                <motion.div
                  key={i}
                  className="w-full mb-8"
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                      className="lg:col-span-1"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                    >
                      <Image src="/img/conto termicp.jpg" alt="Conto Termico 3.0" width={500} height={500} className="w-full h-auto rounded-xl shadow-combined hover-lift transition-smooth" loading="lazy" />
                    </motion.div>
                    <motion.div
                      className="lg:col-span-1"
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportSettings}
                    >
                      <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                        <h5 className="text-xl font-bold mb-3 text-gradient-primary">{section.title}</h5>
                        <div className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            }

            // Grid 2x2 para las secciones de Conto Termico 3.0 - se renderiza cuando se llega a la última sección
            if (slug === 'conto-termico' && section.title === 'Requisiti per accedere al Conto Termico 3.0') {
              const contoTermico3Sections = service.sections.filter(s =>
                s.title !== 'Come si recupera l\'incentivo?' &&
                s.title !== 'Cos\'è, come funziona e come accedere agli incentivi'
              );

              return (
                <motion.div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full"
                  variants={staggerContainer}
                  initial="visible"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {contoTermico3Sections.map((sectionItem, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardEntrance}
                      className="bg-white rounded-xl shadow-card hover-lift hover-shine p-6 h-full border border-[#9BBD2D]/20 transition-smooth"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#9BBD2D] to-[#7a9a1f] rounded-lg flex items-center justify-center shadow-lg mr-4">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-white text-sm" />
                        </div>
                        <h5 className="font-bold text-lg mb-0 text-gradient-primary">{sectionItem.title}</h5>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: sectionItem.content }}></div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            }

            // Skip other Conto Termico 3.0 sections as they're rendered in the grid above
            if (slug === 'conto-termico' && section.title !== 'Cos\'è, come funziona e come accedere agli incentivi' && section.title !== 'Requisiti per accedere al Conto Termico 3.0') {
              return null;
            }



            // Diseño especial para las secciones de Contributo PNRR - Accordion
             if (slug === 'contributo-pnrr') {
              const sectionIcons = {
                "Cos'è il contributo PNRR?": 'fa-info-circle',
                "Perché investire oggi? Come accedere e requisiti": 'fa-chart-line',
                "Cosa copre il PNRR?": 'fa-euro-sign',
                "Il nostro supporto:": 'fa-hands-helping'
              };

              const currentIcon = sectionIcons[section.title as keyof typeof sectionIcons] || 'fa-info-circle';
              const isExpanded = expandedSections[section.title] || false;

              return (
                <motion.div
                  key={i}
                  className="w-full mb-4"
                  variants={cardEntrance}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportSettings}
                >
                  <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative group">
                    {/* Efectos decorativos */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F49918]/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                      {/* Header clickeable */}
                      <div
                        className="p-3 lg:p-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                        onClick={() => toggleSection(section.title)}
                      >
                        <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#F49918] to-[#c27a12] rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-2">
                            <FontAwesomeIcon icon={iconMap[currentIcon] || faCheckCircle} className="text-white text-sm" />
                          </div>
                           <h2 className="text-base font-bold text-gray-800">{section.title}</h2>
                        </div>
                          <div className={`text-[#F49918] transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <FontAwesomeIcon icon={faChevronDown} className="text-lg" />
                          </div>
                        </div>
                      </div>

                      {/* Contenido expandible */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6">
                          <div className="prose prose-lg max-w-none">
                            {/* Mostrar contenido para todas las secciones */}
                             <div className="text-sm text-gray-700 leading-relaxed space-y-3 mb-4" dangerouslySetInnerHTML={{ __html: section.content }}></div>

                            {/* Lista especial para secciones con listas */}
                            {section.list && (
                              <div className="bg-white rounded-lg p-4 border border-gray-200">
                                {section.title === 'Cosa copre il PNRR?' && (
                                   <p className="font-semibold text-sm mb-3 text-black">Rientrano nell&apos;incentivo in particolare:</p>
                                )}
                                {section.title === 'Il nostro supporto:' && (
                                   <p className="text-sm text-black leading-relaxed mb-3 font-semibold" dangerouslySetInnerHTML={{ __html: section.content.split('<br><br>')[0] }}></p>
                                )}
                                <ul className="space-y-2">
                                  {section.list.map((item, j) => (
                                    <li key={j} className="flex items-start group/item">
                                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#F49918] to-[#c27a12] rounded-full flex items-center justify-center mr-2 mt-0.5 group-hover/item:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xs" />
                                      </div>
                                      <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                                {section.title === 'Cosa copre il PNRR?' && (
                                  <div className="mt-4 pt-3 border-t border-gray-200">
                                     <div className="text-sm text-black leading-relaxed mb-3 font-semibold">
                                       Le spese ammissibili sono riconosciute fino al 40% con massimali definiti:
                                     </div>
                                    <ul className="space-y-2">
                                      {[
                                        '1.500 €/kW per impianti fino a 20 kW',
                                        '1.200 €/kW per impianti da 21 a 200 kW',
                                        '1.100 €/kW per impianti da 201 a 600 kW',
                                        '1.050 €/kW per impianti fino a 1.000 kW'
                                      ].map((item, j) => (
                                        <li key={j} className="flex items-start group/item">
                                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-[#F49918] to-[#c27a12] rounded-full flex items-center justify-center mr-2 mt-0.5 group-hover/item:scale-110 transition-transform">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xs" />
                                          </div>
                                          <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {section.title === 'Il nostro supporto:' && (
                                  <div className="mt-4 pt-3 border-t border-gray-200">
                                     <p className="text-sm text-black leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: section.content.split('<br><br>')[1] }}></p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={i}
                className={section.fullWidth ? 'lg:col-span-2' : 'lg:col-span-1'}
                variants={cardEntrance}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <div className="bg-white rounded-xl shadow-card hover-lift hover-shine p-8 h-full border border-primary-100 transition-smooth">
                  <div className="flex items-center mb-4">
                    {!section.hideLogo && (
                      <div className="flex-shrink-0">
                        <Image src="/img/logo.png" alt="icon" width={40} height={40} style={{ height: 'auto' }} />
                      </div>
                    )}
                    <div className="flex-grow ml-4">
                      <h5 className="font-bold text-lg mb-0 text-gradient-primary">{section.title}</h5>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }}></div>
                  {section.list ? (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                   {section.accordionItems && (
                     <div className="mt-4">
                       <InfoAccordion items={section.accordionItems} />
                     </div>
                   )}
                   {section.incentives && (
                     <motion.div
                       className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                       variants={staggerContainer}
                       initial="hidden"
                       whileInView="visible"
                       viewport={viewportSettings}
                     >
                       {section.incentives.map((incentive, j) => (
                         <motion.div
                           key={j}
                           variants={cardEntrance}
                           className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                         >
                           <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-700 transition-colors">
                             {incentive.title}
                           </h3>
                           <p className="text-gray-600 leading-relaxed mb-4">
                             {incentive.description}
                           </p>
                           <Link
                             href={incentive.link}
                             className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors group/link"
                           >
                             Scopri di più
                             <motion.div
                               className="ml-2"
                               animate={{ x: [0, 5, 0] }}
                               transition={{ duration: 1.5, repeat: Infinity }}
                             >
                               →
                             </motion.div>
                           </Link>
                         </motion.div>
                       ))}
                     </motion.div>
                   )}
                 </div>
               </motion.div>
            );
           })
           ))}

      {/* Partners Section - Modularized */}
      <ServicePartners
        title={service.partnersTitle}
        introduction={service.partnersIntroduction}
        partners={service.partners}
      />
    </ServicePageLayout>
    </>
  );
};

export default ServicePage;