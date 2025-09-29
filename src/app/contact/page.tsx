'use client';
import PageHeader from '@/components/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {

  return (
    <>
      <PageHeader title="Richiedi un preventivo" />

      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
          <div className="container contact px-lg-0">
              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center p-5">
                      <p className="lead mb-5">Se hai bisogno di un preventivo, non esitare a contattarci:</p>
                      
                      <div className="row">
                          <div className="col-md-6 mb-4">
                              <div className="p-3">
                                  <FontAwesomeIcon icon={faEnvelope} className="fa-3x text-primary mb-3" />
                                  <h5 className="mb-3">Invia una mail</h5>
                                  <p className="text-muted">info@lc-energia.it</p>
                                  <a href="mailto:info@lc-energia.it" className="btn btn-outline-primary mt-3">Scrivi ora</a>
                              </div>
                          </div>
                          <div className="col-md-6 mb-4">
                              <div className="p-3">
                                  <FontAwesomeIcon icon={faPhone} className="fa-3x text-primary mb-3" />
                                  <h5 className="mb-3">Chiama ora</h5>
                                  <p className="text-muted">0362 992142</p>
                                  <a href="tel:0362992142" className="btn btn-outline-secondary mt-3">Chiama</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <div className="h-[300px] md:h-[450px]">
                          <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi" frameBorder="0" allowFullScreen></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default ContactPage;