'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faSolarPanel, faWind, faLightbulb, faHeadset } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { Heading1, Heading2, Heading5, Heading6, Text } from '@/components/ui/Typography';
import TiltCard from '@/components/TiltCard';
import { valuePropositions, reasons, teamMembers } from '@/data/azienda-data';

const iconMap: { [key: string]: IconDefinition } = {
  'fa-solar-panel': faSolarPanel,
  'fa-wind': faWind,
  'fa-lightbulb': faLightbulb,
  'fa-headset': faHeadset,
};

const AziendaPage = () => {
  return (
    <>
      <PageHeader title="Azienda" />

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading1 className="text-center" color="primary">Il valore dell’esperienza per l’efficienza ed il risparmio energetico</Heading1>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <TiltCard className="bg-white p-6 rounded-lg shadow-lg">
                  <Text color="muted" className="leading-relaxed">
                    {item.content}
                  </Text>
                  {item.list && (
                    <ul className="list-disc list-inside mt-4">
                      {item.list.map((point, i) => (
                        <li key={i} className="text-gray-600 leading-relaxed">
                          <Text as="span" color="muted" size="sm" justify={false} maxWidth={false}>
                            {point}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading6 color="primary" className="font-bold text-lg">Produzione di energia pulita per salvare l’ambiente</Heading6>
            <Heading1 className="text-center mt-2 mb-4" color="primary">I motivi per scegliere LC Energia</Heading1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => {
              const icon = iconMap[reason.icon];
              return (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 0.3 + index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <TiltCard className="bg-white rounded-lg shadow-md p-6 text-center h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                    <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                      {icon && <FontAwesomeIcon icon={icon} className="fa-2x" />}
                    </div>
                    <Heading5 className="mb-3" color="primary">{reason.title}</Heading5>
                    <Text color="muted" justify={false}>{reason.description}</Text>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collaborazioni Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading2 className="text-center" color="primary">Collaborazioni</Heading2>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center"
          >
            <Image src="/img/image3.png" alt="Collaborazioni" width={512} height={512} className="w-64 h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="testimonial-item text-center">
              <div className="testimonial-text text-center rounded p-4">
                  <Text as="div" color="muted" className="text-center">
                    Iscritti ai rispettivi Albi Professionali Provinciali <br />
                    Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007 <br />
                    Accreditati Energy Building Manager, Regione Lombardia ai sensi del D.G.R. VIII/8355 del 5 Novembre 2008 <br />
                    Iscritti nell’elenco dei progettisti antincendio del Ministero dell’Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84) <br />
                    Verificatori in materia di sicurezza degli impianti ai sensi del DM 22/1/08 n. 37 <br />
                    Consulenti tecnici del Tribunale di Monza
                  </Text>
              </div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading6 color="primary" className="font-bold text-lg">Membri del Team Esperti</Heading6>
          </motion.div>
          <div className="flex flex-wrap justify-center -m-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full transition-all duration-300 border border-gray-200 hover:shadow-xl hover:border-primary">
                  <Heading5 color="primary">{member.name}</Heading5>
                  <Text color="primary" justify={false}>{member.role}</Text>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AziendaPage;