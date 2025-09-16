'use client';
import PageHeader from '@/components/PageHeader';
import { accreditations } from '@/data/azienda-data';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';

const AccreditationsPage = () => {
  const accreditation = accreditations[0];

  return (
    <>
      <PageHeader title="Accrediti" breadcrumb="Accrediti" />

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container text-center">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <i className="bi bi-shield-fill-check display-1 text-primary"></i>
                      <h3 className=" mb-0">{accreditation.title}</h3>
                      <h4 className="mb-1">{accreditation.pageDescription}</h4>
                      <p className="mb-4" dangerouslySetInnerHTML={{ __html: accreditation.description.split('.<br>').join('.<br><br>') }}></p>
                      <Link href="/" className="btn btn-primary rounded-pill py-3 px-5">Torna alla homepage</Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default AccreditationsPage;