'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faSolarPanel, faWind, faLightbulb, faHeadset } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '@/components/PageHeader';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardEntrance, iconPop, viewportSettings } from '@/lib/animation-variants';
import { Heading1, Heading2, Heading6, Text } from '@/components/ui/Typography';
import TiltCard from '@/components/TiltCard';
import { reasons, teamMembers } from '@/data/azienda-data';

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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blocco 1: Introduzione e Missione */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <Heading2 className="text-center mb-4 font-bold text-black-force">Il valore dell&apos;esperienza per l&apos;efficienza ed il risparmio energetico</Heading2>
            <Text color="muted" size="lg" className="leading-relaxed mx-auto" justify={true}>
              LC Energia vanta di personale qualificato e con grande esperienza nel settore della progettazione e realizzazione di impianti civili e industriali. L’impegno dell’azienda è volto a contribuire in prima linea agli obiettivi Europei e Nazionali per la decarbonizzazione e l’efficientamento energetico. Per questo LC Energia, oltre a fornire consulenza e progettazione per gli impianti termici, si è specializzata nella realizzazione di impianti fotovoltaici sia nel settore civile che industriale.
            </Text>
          </motion.div>

          {/* Blocco 2: Compromiso y Beneficios (Destacado) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Columna de Imagen */}
            <motion.div
              variants={cardEntrance}
              className="relative h-64 lg:h-full rounded-xl overflow-hidden shadow-combined hover-lift"
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
              variants={cardEntrance}
            >
              <TiltCard className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-primary hover-lift border-l-4 border-primary-500 h-full">
                <Heading2 className="!text-black mb-4 font-bold">Impegno per la Qualità e il Risparmio Energetico</Heading2>
                <Text color="muted" size="base" className="leading-relaxed">
                  Sfruttando le nostre competenze operiamo sempre nel rispetto degli obblighi legislativi e normativi per fornire al cliente un servizio a regola d’arte. Attraverso interventi di riqualificazione architettonica e impiantistica su diversi edifici nel campo industriale, civile, pubblico e nei processi produttivi, LC Energia permette ai suoi clienti di ottenere significativi risparmi energetici oltre a una miglior qualità di vita.
                </Text>
              </TiltCard>
            </motion.div>
          </motion.div>

          {/* Blocco 3: Settori Operativi (Modulare) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <Heading2 className="text-center mb-4 font-bold text-black-force">I Nostri Settori Operativi</Heading2>
            <Text color="muted" className="leading-relaxed mb-8 mx-auto" justify={true}>
              Il successo di LC Energia deriva dalla corretta applicazione delle conoscenze tecniche e dall&apos;utilizzo razionale delle nuove tecnologie per la produzione di energia e la riduzione dei consumi. La società opera attraverso due principali settori operativi:
            </Text>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {/* Settore 1: Consulenza */}
            <motion.div
              variants={cardEntrance}
            >
              <TiltCard className="bg-white p-8 rounded-xl shadow-card hover-lift hover-shine h-full border border-primary-100">
                <motion.div
                  className="flex items-center mb-4"
                  variants={iconPop}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-primary">
                    <FontAwesomeIcon icon={faHeadset} className="text-xl text-white" />
                  </div>
                </motion.div>
                <Text color="muted" className="leading-relaxed" justify={true}>
                  Consulenza tecnica e progettazione che include anche attività di prevenzione incendi, acustica e assistenza ai lavori.
                </Text>
              </TiltCard>
            </motion.div>

            {/* Settore 2: Realizzazione */}
            <motion.div
              variants={cardEntrance}
            >
              <TiltCard className="bg-white p-8 rounded-xl shadow-card hover-lift hover-shine h-full border border-secondary-100">
                <motion.div
                  className="flex items-center mb-4"
                  variants={iconPop}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-secondary flex items-center justify-center shadow-secondary">
                    <FontAwesomeIcon icon={faSolarPanel} className="text-xl text-white" />
                  </div>
                </motion.div>
                <Text color="muted" className="leading-relaxed" justify={true}>
                  Realizzazione di impianti ad alto profilo tecnologico per la produzione di energia elettrica e termica per l&apos;abbattimento dei consumi energetici.
                </Text>
              </TiltCard>
            </motion.div>
          </motion.div>

          {/* Blocco 3 Conclusión: Soluciones a Medida */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-4xl mx-auto"
          >
            <Heading2 className="text-center mb-4 font-bold text-black-force">Partner Affidabile per la Sostenibilità</Heading2>
            <Text color="muted" size="base" className="leading-relaxed mx-auto" justify={true}>
              LC Energia si impegna a offrire soluzioni su misura per le esigenze specifiche dei clienti, garantendo risultati tangibili attraverso un percorso collaudato che include la diagnosi energetica, la valutazione degli interventi e la stima economica degli investimenti proposti. Grazie a un&apos;approfondita conoscenza del settore e alla competenza tecnica, LC Energia si posiziona come un partner affidabile per il raggiungimento degli obiettivi di efficienza energetica e sostenibilità.
            </Text>
          </motion.div>
        </div>
      </section>

     
      {/* Reasons Section */}
      <section className="reasons-section bg-gradient-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)'
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)'],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading6 className="font-bold text-lg text-white-force">Produzione di energia pulita per salvare l’ambiente</Heading6>
            <Heading1 className="text-center mt-2 mb-4 text-white-force">I motivi per scegliere LC Energia</Heading1>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {reasons.map((reason, index) => {
              const icon = iconMap[reason.icon];
              return (
                <motion.div
                  key={index}
                  variants={cardEntrance}
                >
                  <TiltCard className="bg-white/95 backdrop-blur-sm rounded-xl shadow-card p-8 text-center h-full hover-lift hover-shine border border-white/40">
                    <motion.div
                      className="inline-flex items-center justify-center mb-6"
                      variants={iconPop}
                      initial="hidden"
                      whileInView="visible"
                    >
                      <div className="w-16 h-16 bg-gradient-combined rounded-full flex items-center justify-center shadow-combined">
                        {icon && <FontAwesomeIcon icon={icon} className="text-2xl text-white" />}
                      </div>
                    </motion.div>
                    <Heading2 className="mb-4 !text-black">{reason.title}</Heading2>
                    <Text color="muted" justify={false} size="sm">{reason.description}</Text>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Collaborazioni Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading2 className="text-center font-bold !text-black">Collaborazioni</Heading2>
          </motion.div>
          <motion.div
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex justify-center"
          >
            <div className="hover-lift transition-smooth">
              <Image src="/img/image3.png" alt="Collaborazioni" width={512} height={512} className="w-64 h-auto" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificazioni Professionali Section */}
      <section className="certificazioni-section bg-gradient-secondary py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Efecto de brillo animado */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.5), transparent)',
            transform: 'translateX(-100%)'
          }}
          animate={{
            transform: ['translateX(-100%)', 'translateX(100%)'],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-5xl mx-auto mb-12"
          >
            <Heading2 className="text-center mb-6 text-white font-bold" color="white">Certificazioni Professionali & Accreditamenti</Heading2>
          </motion.div>

          <motion.div
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-secondary-hover border-l-4 border-white p-8 md:p-10 relative hover-lift">
              {/* Efecto de sombra naranja */}
              <div className="absolute -inset-1 bg-gradient-secondary rounded-2xl blur-xl opacity-30 -z-10"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Columna Izquierda */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-bold text-base mb-1">Albi Professionali</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Iscritti ai rispettivi Albi Professionali Provinciali
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-bold text-base mb-1">Certificazione Energetica</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Certificatori Energetici di cui al D.G.R. 8/5018 – 20.07.2007
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-bold text-base mb-1">Energy Building Manager</Text>
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
                      <Text color="dark" className="font-bold text-base mb-1">Progettazione Antincendio</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Iscritti nell&apos;elenco dei progettisti antincendio del Ministero dell&apos;Interno di cui al D.Lgs n.139/2006 (ex Legge 818/84)
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-bold text-base mb-1">Sicurezza Impianti</Text>
                      <Text color="muted" size="sm" className="leading-relaxed">
                        Verificatori in materia di sicurezza degli impianti ai sensi del DM 22/1/08 n. 37
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <Text color="dark" className="font-bold text-base mb-1">Consulenza Tecnica</Text>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <Heading2 className="text-center font-bold !text-black">Membri del Team Esperti</Heading2>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center -m-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardEntrance}
                className="w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl shadow-card p-8 text-center h-full hover-lift hover-shine border border-secondary-100 backdrop-blur-sm">
                  <Heading2 className="text-gradient-secondary" color="secondary">{member.name}</Heading2>
                  <Text color="muted" justify={false} size="sm">{member.role}</Text>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AziendaPage;