'use client';
import PageHeader from '@/components/layout/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardEntrance, iconPop, viewportSettings } from '@/lib/animation-variants';

export default function ContactContent() {
  return (
    <>
      <PageHeader title="Richiedi un preventivo" />

      <section className="bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30 overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full lg:w-8/12 text-center p-6">
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Se hai bisogno di un preventivo, non esitare a contattarci:
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
              >
                <motion.div variants={cardEntrance} className="mb-4">
                  <div className="p-8 bg-white rounded-xl shadow-card hover-lift hover-shine h-full border border-primary-100">
                    <motion.div
                      variants={iconPop}
                      initial="hidden"
                      whileInView="visible"
                      className="inline-flex items-center justify-center mb-6"
                    >
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-primary">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" aria-hidden="true" />
                      </div>
                    </motion.div>
                    <h5 className="text-xl font-bold mb-4 text-gradient-primary">Invia una mail</h5>
                    <p className="text-gray-600 mb-6 text-lg">info@lc-energia.it</p>
                    <Button asChild variant="outline" className="mt-4 hover:bg-gradient-primary hover:text-white hover:border-primary-500 transition-all focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
                      <a href="mailto:info@lc-energia.it">Scrivi ora</a>
                    </Button>
                  </div>
                </motion.div>

                <motion.div variants={cardEntrance} className="mb-4">
                  <div className="p-8 bg-white rounded-xl shadow-card hover-lift hover-shine h-full border border-secondary-100">
                    <motion.div
                      variants={iconPop}
                      initial="hidden"
                      whileInView="visible"
                      className="inline-flex items-center justify-center mb-6"
                    >
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-secondary">
                        <FontAwesomeIcon icon={faPhone} className="text-2xl text-white" aria-hidden="true" />
                      </div>
                    </motion.div>
                    <h5 className="text-xl font-bold mb-4 text-gradient-secondary">Chiama ora</h5>
                    <p className="text-gray-600 mb-6 text-lg">0362 992142</p>
                    <Button asChild variant="outline" className="mt-4 hover:bg-gradient-secondary hover:text-white hover:border-secondary-500 transition-all focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2">
                      <a href="tel:0362992142">Chiama</a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-16"
          >
            <div className="w-full">
              <div className="h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-combined hover-lift transition-smooth border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi"
                  frameBorder="0"
                  allowFullScreen
                  title="Mappa sede LC Energia - Via della Valle 39, Carate Brianza"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
