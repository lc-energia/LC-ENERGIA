'use client';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const ContactPage = () => {

  return (
    <>
      <PageHeader title="Richiedi un preventivo" breadcrumb="Richiedi un preventivo" />

      <div className="container-fluid bg-light overflow-hidden px-lg-0" style={{ margin: "6rem 0" }}>
          <div className="container contact px-lg-0">
              <div className="row g-0 mx-lg-0">
                  <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                      <div className="contact-buttons mb-5 wow fadeInUp" data-wow-delay="0.3s">
                          <p>Se hai bisogno di un preventivo, non esitare a contattarci:</p>
                          <div className="d-flex gap-3">
                              <button className="btn btn-primary" onClick={() => window.location.href='mailto:info@lc-energia.it'}>Invia una mail</button>
                              <button className="btn btn-secondary" onClick={() => window.location.href='tel:0362992142'}>Chiama ora</button>
                          </div>
                          <p className="mt-3">Email: info@lc-energia.it</p>
                          <p>Telefono: 0362 992142</p>
                      </div>
                      <div className="mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                          <img src="/img/natural5.png" alt="Vantaggi" className="img-fluid mt-2" style={{ maxWidth: "100%", height: "auto" }} />
                      </div>
                  </div>
                  <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
                      <div className="position-relative h-100">
                          <iframe className="position-absolute w-100 h-100" style={{ objectFit: "cover" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.386039023569!2d9.224754576986633!3d45.66315002014133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bc9573a448a1%3A0x51f9fe9c02a37f97!2sVia%20della%20Valle%2C%2039%2C%2020841%20Carate%20Brianza%20MB%2C%20Italy!5e0!3m2!1sen!2ssi!4v1729678261040!5m2!1sen!2ssi" frameBorder="0" allowFullScreen aria-hidden="false"
                              tabIndex={0}></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default ContactPage;