'use client';
import ServicePageLayout from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import FeatureCard from '@/components/FeatureCard';
import FaqAccordion from '@/components/FaqAccordion';

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
    <ServicePageLayout title={service.title} breadcrumb={service.breadcrumb}>
      <div className="text-center mx-auto mb-5">
        <h1 className="display-5 mb-4">{service.title}</h1>
        <p className="lead" dangerouslySetInnerHTML={{ __html: service.introduction }}></p>
      </div>

      {service.mainFeatures && (
        <div className="row g-4 justify-content-center mb-5">
          {service.mainFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} variants={cardVariants} i={i} columnClass="col-lg-3 col-md-6" />
          ))}
        </div>
      )}

      <div className="row g-4 justify-content-center">
        {slug === 'contabilizzazione-calore-impianti-termici-centralizzati' ? (
          <div className="col-lg-12">
            <div className="mb-5">
              <p>{service.sections[0].content}</p>
            </div>
            <div className="row justify-content-center g-4">
              {service.sections.slice(1).map((section, i) => (
                <motion.div
                  key={i}
                  className="col-lg-6"
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
                    </div>
                    {items?.map((item, j) => (
                      <FeatureCard key={j} feature={item} variants={cardVariants} i={i + j} columnClass={featureCardColumnClass} />
                    ))}
                  </div>
                </div>
              );
            }
            if (section.title === 'FAQ') {
              return <FaqAccordion key={i} section={section} />;
            }
            let columnClass = section.fullWidth ? 'col-lg-12' : 'col-lg-4 col-md-6';
            if (slug === 'impianti-geotermici' && !section.fullWidth) {
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
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      {!section.hideLogo && (
                        <div className="flex-shrink-0">
                          <Image src="/img/logo.png" alt="icon" width={40} height={40} style={{ height: 'auto' }} />
                        </div>
                      )}
                      <div className="flex-grow-1 ms-3">
                        <h5 className="card-title mb-0">{section.title}</h5>
                      </div>
                    </div>
                    <p className="card-text">{section.content}</p>
                    {section.list && (
                      <ul className="list-unstyled mb-0">
                        {section.list.map((item, j) => (
                          <li key={j} className="d-flex align-items-start mb-2">
                            <i className="fa fa-check-circle text-primary mt-1 me-2"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {service.partners && (
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
              <h2 className="display-6 mb-4">{service.partnersTitle}</h2>
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