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

      {/* Nuova Sezione: Storia, Missione e Settori Operativi */}
      <section className="py-12 sm:py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blocco 1: Introduzione e Missione */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Heading2 className="text-center mb-4" color="primary">La Nostra Storia e Missione</Heading2>
            <Text color="muted" size="lg" className="leading-relaxed mx-auto" justify={true}>
              LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale.
            </Text>
          </motion.div>

          {/* Blocco 2: Compromiso y Beneficios (Destacado) */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Columna de Imagen */}
            <motion.div
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative h-64 lg:h-full rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img/volta3.JPEG"
                alt="Impegno per la Qualità"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </motion.div>
            
            {/* Columna de Texto (TiltCard) */}
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <TiltCard className="bg-primary/10 p-8 rounded-xl shadow-2xl border-l-4 border-primary h-full">
                <Heading5 color="primary" className="mb-4">Impegno per la Qualità e il Risparmio Energetico</Heading5>
                <Text color="muted" size="base" className="leading-relaxed">
                  Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d’arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita.
                </Text>
              </TiltCard>
            </motion.div>
          </motion.div>

          {/* Blocco 3: Settori Operativi (Modulare) */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <Heading2 className="text-center mb-4" color="primary">I Nostri Settori Operativi</Heading2>
            <Text color="muted" className="leading-relaxed mb-8 mx-auto" justify={true}>
              Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall'utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi.
            </Text>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Settore 1: Consulenza */}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <TiltCard className="bg-light p-6 rounded-xl shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faHeadset} className="fa-2x text-primary mr-4" />
                  <Heading5 color="primary">Consulenza Tecnica e Progettazione</Heading5>
                </div>
                <Text color="muted" className="leading-relaxed" justify={true}>
                  Include anche attività di prevenzione incendi, acustica e assistenza ai lavori.
                </Text>
              </TiltCard>
            </motion.div>

            {/* Settore 2: Realizzazione */}
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <TiltCard className="bg-white p-6 rounded-xl shadow-lg h-full">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faSolarPanel} className="fa-2x text-primary mr-4" />
                  <Heading5 color="primary">Realizzazione di Impianti ad Alto Profilo Tecnologico</Heading5>
                </div>
                <Text color="muted" className="leading-relaxed" justify={true}>
                  Per la produzione di energia elettrica e termica per l’abbattimento dei consumi energetici.
                </Text>
              </TiltCard>
            </motion.div>
          </div>

          {/* Blocco 3 Conclusión: Soluciones a Medida */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Heading5 color="primary" className="mb-4">Partner Affidabile per la Sostenibilità</Heading5>
            <Text color="muted" size="base" className="leading-relaxed mx-auto" justify={true}>
              LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un'approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità.
            </Text>
          </motion.div>
        </div>
      </section>

     
      {/* Reasons Section */}
      <section
        className="reasons-section py-12 sm:py-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%) !important'
        }}
      >
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
      <section className="py-12 sm:py-16 bg-neutral-100">
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

      {/* Certificazioni Professionali Section */}
      <section
        className="certificazioni-section py-12 sm:py-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F49918 0%, #db8a15 100%) !important'
        }}
      >
        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
            transform: 'translateX(-100%)'
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)', 'translateX(-100%)'],
            transition: { duration: 6, ease: 'easeInOut', repeat: Infinity }
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center max-w-5xl mx-auto mb-8"
          >
            <Heading2 className="text-center mb-6 text-white" color="white">Certificazioni Professionali & Accreditamenti</Heading2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-2xl border-l-4 border-secondary p-8 md:p-10 relative">
              {/* Efecto de sombra naranja */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-secondary/40 rounded-2xl blur-xl -z-10"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Columna Izquierda */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Albi Professionali</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Iscritti ai rispettivi Albi Professionali Provinciali
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Certificazione Energetica</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Energy Building Manager</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Accreditati Energy Building Manager, Regione Lombardia ai sensi del D.G.R. VIII/8355 del 5 Novembre 2008
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Progettazione Antincendio</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Iscritti nell'elenco dei progettisti antincendio del Ministero dell'Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84)
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Sicurezza Impianti</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Verificatori in materia di sicurezza degli impianti ai sensi del DM 22/1/08 n. 37
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-semibold text-base mb-1">Consulenza Tecnica</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Consulenti tecnici del Tribunale di Monza
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/30 rounded-lg shadow-xl p-6 text-center h-full transition-all duration-300 border border-secondary/30 hover:shadow-2xl hover:border-secondary hover:bg-secondary/40 backdrop-blur-sm border-white/20">
                  <Heading5 color="secondary">{member.name}</Heading5>
                  <Text color="secondary" justify={false}>{member.role}</Text>
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