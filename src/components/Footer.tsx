'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Text, Heading5, NavLink } from '@/components/ui/Typography';

const Footer = () => {
  return (
    <footer className="bg-dark-500 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Column 1: Logo and P.IVA */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/img/logoblanco.png"
                alt="LC Energia Logo"
                width={150}
                height={50}
                style={{ height: 'auto' }}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <Text size="sm" color="muted" className="font-medium">
              P.iva 04115680136
            </Text>
          </div>

          {/* Column 2: Link Veloci */}
          <div className="space-y-4">
            <Heading5 color="accent" className="font-semibold text-base">Link Veloci</Heading5>
            <nav className="space-y-2">
              <NavLink href="/azienda" className="block text-sm hover:text-secondary transition-colors">Chi Siamo</NavLink>
              <NavLink href="/contact" className="block text-sm hover:text-secondary transition-colors">Richiedi un Preventivo</NavLink>
              <NavLink href="/" className="block text-sm hover:text-secondary transition-colors">I Nostri Servizi</NavLink>
              <NavLink href="/accrediti" className="block text-sm hover:text-secondary transition-colors">Accrediti</NavLink>
              <NavLink href="/contact" className="block text-sm hover:text-secondary transition-colors">Contatti</NavLink>
            </nav>
          </div>

          {/* Column 3: Contatti Diretti */}
          <div className="space-y-4">
            <Heading5 color="accent" className="font-semibold text-base">Contatti</Heading5>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-3 text-[#F49918] w-4" />
                <span className="hover:text-secondary transition-colors cursor-pointer">0362992142</span>
              </div>
              <div className="flex items-center text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#F49918] w-4" />
                <span className="hover:text-secondary transition-colors cursor-pointer">info@lc-energia.it</span>
              </div>
              <div className="flex items-start text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 mt-0.5 text-[#F49918] w-4" />
                <span>Via della Valle 39, 20841, Carate Brianza (MB)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <Heading5 color="accent" className="font-semibold text-base">Social</Heading5>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/lc-energia-s-r-l"
                aria-label="Linkedin"
                className="w-10 h-10 bg-[#F49918] rounded-full flex items-center justify-center hover:bg-[#db8a15] transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Brand Only */}
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center">
            <Text size="sm" color="muted" className="text-gray-400 font-semibold">
              LC ENERGIA
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;