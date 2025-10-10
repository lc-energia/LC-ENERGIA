'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Text, Heading5, NavLink } from '@/components/ui/Typography';

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
            <Text size="sm" color="muted" className="mb-4">P.iva 04115680136</Text>
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
            <Heading5>Link Veloci</Heading5>
            <nav className="flex flex-col space-y-2">
              <NavLink href="/azienda">Chi Siamo</NavLink>
              <NavLink href="/contact">Richiedi un Preventivo</NavLink>
              <NavLink href="/">I Nostri Servizi</NavLink>
              <NavLink href="/accrediti">Accrediti</NavLink>
            </nav>
          </div>

          {/* Column 3: Address */}
          <div className="text-left">
            <Heading5>Contatti</Heading5>
            <div className="space-y-2 text-sm">
              
              <Text as="div" className="flex items-center">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-primary" />
                <NavLink href="tel:0362992142">
                  0362992142
                </NavLink>
              </Text>
              <Text as="div" className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary" />
                <NavLink href="mailto:info@lc-energia.it">
                  info@lc-energia.it
                </NavLink>
              </Text>
              <Text as="div" className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-1 text-primary" />
                <span>
                  Via della Valle 39, 20841,<br />Carate Brianza (MB)
                </span>
              </Text>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <Text size="sm" color="muted" className="text-center">
            &copy; LC Energia, 2024. Tutti i diritti riservati.
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;