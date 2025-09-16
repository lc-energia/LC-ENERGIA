
'use client';
import ServicePageLayout from '@/components/ServicePageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServiceData } from '@/data/services-data';
import OperatingModeCard from '@/components/OperatingModeCard';
import FaqAccordion from '@/components/FaqAccordion';

const ServicePage = ({ service }: { service: ServiceData }) => {
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
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <h1 className="display-5 mb-4">{service.title}</h1>
        <p className="lead">{service.introduction}</p>
      </div>

      <div className="row g-4 justify-content-center">
        {service.sections.map((section, i) => {
          if (section.title === 'Modalità di Funzionamento') {
            return (
              <div className="col-12" key={i}>
                <div className="row justify-content-center g-4">
                  <div className="col-lg-12 text-center mb-4">
                    <h2>{section.title}</h2>
                  </div>
                  {section.modes?.map((mode, j) => (
                    <OperatingModeCard key={j} mode={mode} variants={cardVariants} i={i + j} />
                  ))}
                </div>
              </div>
            );
          }
          if (section.title === 'FAQ') {
            return <FaqAccordion key={i} section={section} />;
          }
          const columnClass = (section.title === 'Vantaggi') ? 'col-lg-12' : 'col-lg-4 col-md-6';
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
                    <div className="flex-shrink-0">
                      <Image src="/img/logo.png" alt="icon" width={40} height={40} style={{ height: 'auto' }} />
                    </div>
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
        })}
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
