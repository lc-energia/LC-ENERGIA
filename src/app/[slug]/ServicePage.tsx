'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import ServicePageLayout from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import FeatureCard from '@/components/FeatureCard';
import FaqAccordion from '@/components/FaqAccordion';
import SimpleTextCard from '@/components/SimpleTextCard';
import InfoAccordion from '@/components/InfoAccordion';
import ImageCarousel from '@/components/ImageCarousel';

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
                  Grazie alla comunità energetica è possibile ricevere un incentivo per l’energia immessa in rete e consumata all’interno della Comunità Energetica Rinnovabile.
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
            
            // Layout para secciones de texto/acordeón
            let gridClass = section.fullWidth ? 'lg:col-span-2' : 'lg:col-span-1';
            if ((slug === 'impianti-geotermici') && !section.fullWidth) {
              gridClass = 'lg:col-span-1'; // Ya manejado por el layout de arriba, pero mantenemos la lógica de columna si se usa fuera del bloque principal
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