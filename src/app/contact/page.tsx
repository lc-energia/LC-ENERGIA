'use client';
import PageHeader from '@/components/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/Button';

const ContactPage = () => {

  return (
    <>
      <PageHeader title="Richiedi un preventivo" />

            <section className="bg-neutral-50 overflow-hidden py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                  <div className="w-full lg:w-8/12 text-center p-6">
                      <p className="text-xl text-gray-600 mb-8">Se hai bisogno di un preventivo, non esitare a contattarci:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="mb-4">
                              <div className="p-6 bg-white rounded-xl shadow-lg h-full">
                                  <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-primary mb-3" />
                                  <h5 className="text-xl font-semibold mb-3 text-dark-200">Invia una mail</h5>
                                  <p className="text-gray-600">info@lc-energia.it</p>
                                  <Button asChild variant="outline" className="mt-4">
                                    <a href="mailto:info@lc-energia.it">Scrivi ora</a>
                                  </Button>
                              </div>
                          </div>
                          <div className="mb-4">
                              <div className="p-6 bg-white rounded-xl shadow-lg h-full">
                                  <FontAwesomeIcon icon={faPhone} className="text-3xl text-primary mb-3" />
                                  <h5 className="text-xl font-semibold mb-3 text-dark-200">Chiama ora</h5>
                                  <p className="text-gray-600">0362 992142</p>
                                  <Button asChild variant="outline" className="mt-4">
                                    <a href="tel:0362992142">Chiama</a>
                                  </Button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="mt-12">
                  <div className="w-full">
                      <div className="h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
                          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi" frameBorder="0" allowFullScreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default ContactPage;