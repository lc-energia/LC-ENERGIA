'use client';
import PageHeader from '@/components/PageHeader';
import { accreditations } from '@/data/azienda-data';
import Link from 'next/link';

const AccreditationsPage = () => {
  const accreditation = accreditations[0];

  return (
    <>
      <PageHeader title="Accrediti" />

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="row g-5 align-items-center">
                  <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                      <p className="mb-4">{accreditation.pageDescription}</p>
                      <ul className="list-group list-group-flush">
                          {accreditation.description.split('.<br>').map((item, index) => (
                              <li key={index} className="list-group-item"><i className="fa fa-check-circle text-primary me-2"></i>{item}</li>
                          ))}
                      </ul>
                      <div className="mt-4">
                        <Link href="/contact" className="btn btn-primary rounded-pill py-3 px-5">Richiedi un preventivo</Link>
                      </div>
                  </div>
                  <div className="col-lg-6 wow fadeIn text-center" data-wow-delay="0.5s">
                      <i className="bi bi-shield-fill-check text-primary" style={{ fontSize: '8rem' }}></i>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default AccreditationsPage;