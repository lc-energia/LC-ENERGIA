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
        <div className="row g-4 justify-content-center mb-5">
          {service.mainFeatures.map((feature, i) => (
            <SimpleTextCard key={i} feature={feature} i={i} columnClass="col-lg-3 col-md-6" />
          ))}
        </div>
      )}

      {slug === 'impianti-fotovoltaici' && (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <p className="lead text-dark font-bold">
                  Grazie alla comunità energetica è possibile ricevere un incentivo per l’energia immessa in rete e consumata all’interno della Comunità Energetica Rinnovabile.
                </p>
              </div>
              <div className="col-lg-6">
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

      <div className="row g-4 justify-content-center">
        {slug === 'progettare-il-risparmio-energetico' ? (
          <div className="col-12">
            <div className="row justify-content-center g-4 align-items-center">
              <div className="col-lg-6">
                <div className="row g-4">
                  {service.sections.map((section, i) => (
                    <motion.div
                      key={i}
                      className="col-lg-12"
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                          <h5 className="card-title mb-3">{section.title}</h5>
                          <p className="card-text">{section.content}</p>
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
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <Image src="/img/lc2.jpg" alt="Progettare il Risparmio Energetico" width={500} height={500} className="img-fluid rounded" />
              </div>
            </div>
          </div>
        ) : slug === 'contabilizzazione-calore-impianti-termici-centralizzati' ? (
          <div className="col-lg-12">
            <div className="mb-5">
              <p>{service.sections[0].content}</p>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-lg-6">
                <Image src="/img/cont1.jpg" alt="Contabilizzazione Calore" width={500} height={500} className="img-fluid rounded" />
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  {service.sections.slice(1).map((section, i) => (
                    <motion.div
                      key={i}
                      className="col-lg-12"
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                    >
                      <div className="card h-100 shadow-sm border-0">
                        <div className="card-body p-4">
                          <h5 className="card-title mb-3">{section.title}</h5>
                          <p className="card-text">{section.content}</p>
                        </div>
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
              <div className="col-12">
                <div className="text-center mb-4">
                  <h2>{section.title}</h2>
                  {section.content && <p className="lead mb-4">{section.content}</p>}
                </div>
                <div className="row justify-content-center g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="row g-4">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} columnClass="col-lg-12" />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image src="/img/anticendio.jpg" alt="Progettazione Antincendio" width={500} height={500} className="img-fluid rounded" />
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
              <div className="col-12">
                <div className="text-center mb-4">
                  <h2>{section.title}</h2>
                  {section.content && <p className="lead mb-4">{section.content}</p>}
                </div>
                <div className="row justify-content-center g-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="row g-4">
                      {items?.map((item, j) => (
                        <FeatureCard key={j} feature={item} i={j} columnClass="col-lg-12" />
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image src="/img/acustica.jpg" alt="Progettazione Acustica" width={500} height={500} className="img-fluid rounded" />
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
              <div className="col-lg-12">
                <div className="row justify-content-center g-4">
                  <div className="col-lg-6">
                    <div className="row g-4">
                      {firstTwoSections.map((section, i) => (
                        <motion.div
                          key={i}
                          className="col-lg-12"
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={cardVariants}
                        >
                          <div className="card h-100 shadow-sm border-0">
                            <div className="card-body p-4">
                              <h5 className="card-title mb-3">{section.title}</h5>
                              <p className="card-text">{section.content}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <Image src="/img/geotermico-ok.jpg" alt="Impianti Geotermici" width={500} height={500} className="img-fluid rounded" />
                  </div>
                </div>
                <div className="row justify-content-center g-4 mt-4">
                  <motion.div
                    className="col-lg-12"
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6 h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                      <div className="flex items-center mb-4">
                        <div className="flex-grow">
                          <h5 className="font-bold text-lg mb-0">{lastSection.title}</h5>
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
              let featureCardColumnClass = 'col-lg-4 col-md-6';
              if (slug === 'progettazione-acustica' || slug === 'progettazione-antincendio') {
                featureCardColumnClass = 'col-lg-6 col-md-6';
              }
              return (
                <div className="col-12" key={i}>
                  <div className="row justify-content-center g-4">
                    <div className="col-lg-12 text-center mb-4">
                      <h2>{section.title}</h2>
                      {section.content && <p className="lead mb-4">{section.content}</p>}
                    </div>
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} i={i + j} columnClass={featureCardColumnClass} />
                    ))}
                  </div>
                </div>
              );
            }
            if (section.title === 'FAQ') {
              return <FaqAccordion key={i} faqs={section.questions || []} />;
            }
            let columnClass = section.fullWidth ? 'col-lg-12' : 'col-lg-4 col-md-6';
            if ((slug === 'impianti-geotermici') && !section.fullWidth) {
              columnClass = 'col-lg-6 col-md-6';
            }
            return (
              <motion.div
                key={i}
                className={columnClass}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                  <div className="flex items-center mb-4">
                    {!section.hideLogo && (
                      <div className="flex-shrink-0">
                        <Image src="/img/logo.png" alt="icon" width={40} height={40} style={{ height: 'auto' }} />
                      </div>
                    )}
                    <div className="flex-grow ml-4">
                      <h5 className="font-bold text-lg mb-0">{section.title}</h5>
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
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5">
              <h6 className="text-primary font-bold text-lg uppercase mb-2">{service.partnersTitle}</h6>
              <p className="lead">{service.partnersIntroduction}</p>
            </div>
            <div className="row g-4 justify-content-center">
              {service.partners.map((partner, i) => (
                <motion.div
                  key={i}
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <div className="partner-logo d-flex justify-content-center align-items-center h-100">
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