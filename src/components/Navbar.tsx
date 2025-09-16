'use client';
import Image from 'next/image';
import { useSticky } from '@/hooks/useSticky';
import Link from 'next/link';

const Navbar = () => {
  const isSticky = useSticky();

  return (
    <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 ${isSticky ? 'shadow-sm' : ''}`} style={{ zIndex: 9999, top: isSticky ? '0px' : '-100px' }}>
      <Link href="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
        <Image src="/img/favicon.png" alt="Logo" width={30} height={30} />
        <h2 className="m-0">
          <span style={{ color: '#F49918' }}>LC</span>
          <span className="text-primary">Energia</span>
        </h2>
      </Link>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link href="/" className="nav-item nav-link ">Home</Link>
          <Link href="/azienda" className="nav-item nav-link">Azienda</Link>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Progettazione</a>
            <div className="dropdown-menu bg-light m-0">
              <Link href="/progettazione-e-consulenza-tecnica" className="dropdown-item">Progettazione e consulenza tecnica</Link>
              <Link href="/contabilizzazione-calore-impianti-termici-centralizzati" className="dropdown-item">Contabilizzazione e ripartizione del calore</Link>
              <Link href="/progettazione-antincendio" className="dropdown-item">Progettazione Antincendio</Link>
              <Link href="/progettazione-acustica" className="dropdown-item">Progettazione Acustica</Link>
              <Link href="/progettare-il-risparmio-energetico" className="dropdown-item">Progettare il risparmio energetico</Link>
              <Link href="/impianti-geotermici" className="dropdown-item">Impianti Geotermici</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Impianti</a>
            <div className="dropdown-menu bg-light m-0">
              <Link href="/impianti-fotovoltaici" className="dropdown-item">Impianti Fotovoltaici</Link>
              <Link href="/stazioni-di-ricarica" className="dropdown-item">Stazioni di Ricarica</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Studio</a>
            <div className="dropdown-menu bg-light m-0">
              <Link href="/riqualificazione-di-centrali-termiche-esistenti" className="dropdown-item">Diagnosi Energetica e Riqualificazione Centrali Termiche</Link>
            </div>
          </div>
          <Link href="/accrediti" className="nav-item nav-link">Accrediti</Link>
        </div>
        <Link href="/contact" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Richiedi un preventivo<i className="fa fa-arrow-right ms-3"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;
