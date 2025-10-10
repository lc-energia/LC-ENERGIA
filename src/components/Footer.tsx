'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Brand and Social */}
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="mb-4">
              <Image
                src="/img/logoblanco.png"
                alt="LC Energia Logo"
                width={120}
                height={40}
                style={{ height: 'auto' }}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <p className="text-sm mb-4 text-gray-400">P.iva 04115680136</p>
            <div className="flex space-x-2">
              <a
                className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#F49918] hover:border-[#F49918] transition-colors duration-300"
                href="https://www.linkedin.com/company/lc-energia-s-r-l"
                aria-label="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-xs" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4">Link Veloci</h5>
            <nav className="flex flex-col space-y-2">
              <Link className="hover:text-[#F49918] transition-colors duration-300" href="/azienda">Chi Siamo</Link>
              <Link className="hover:text-[#F49918] transition-colors duration-300" href="/contact">Richiedi un Preventivo</Link>
              <Link className="hover:text-[#F49918] transition-colors duration-300" href="/">I Nostri Servizi</Link>
              <Link className="hover:text-[#F49918] transition-colors duration-300" href="/accrediti">Accrediti</Link>
            </nav>
          </div>

          {/* Column 3: Address */}
          <div className="text-left">
            <h5 className="text-white font-semibold mb-4">Contatti</h5>
            <div className="space-y-2 text-sm">
              
              <p className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-[#F49918]" />
                <a href="tel:0362992142" className="hover:text-[#F49918] transition-colors duration-300">
                  0362992142
                </a>
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-[#F49918]" />
                <a href="mailto:info@lc-energia.it" className="hover:text-[#F49918] transition-colors duration-300">
                  info@lc-energia.it
                </a>
              </p>
              <p className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-1 text-[#F49918]" />
                <span>
                  Via della Valle 39, 20841,<br />Carate Brianza (MB)
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center text-sm text-gray-400">
            &copy; LC Energia, 2024. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;