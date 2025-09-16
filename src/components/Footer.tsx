'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <motion.footer
      className="bg-dark text-light mt-5 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand and Social */}
          <motion.div 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-start"
          >
            <Link href="/" className="mb-4">
              <Image src="/img/logo.png" alt="LC Energia Logo" width={150} height={50} />
            </Link>
            <p className="mb-4">P.iva 04115680136</p>
            <h5 className="text-white mb-4">Linkedin</h5>
            <div className="flex space-x-2">
              <a 
                className="w-10 h-10 border border-light rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors" 
                href="https://www.linkedin.com/company/lc-energia-s-r-l"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
          >
            <h5 className="text-white text-xl font-bold mb-4">Link Veloci</h5>
            <nav className="flex flex-col space-y-2">
              <Link className="hover:text-primary transition-colors" href="/azienda">Chi Siamo</Link>
              <Link className="hover:text-primary transition-colors" href="/contact">Richiedi un Preventivo</Link>
              <Link className="hover:text-primary transition-colors" href="/">I Nostri Servizi</Link>
              <Link className="hover:text-primary transition-colors" href="/accrediti">Accrediti</Link>
            </nav>
          </motion.div>

          {/* Column 3: Address */}
          <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.25 }}
          >
            <h5 className="text-white text-xl font-bold mb-4">Indirizzo</h5>
            <p className="mb-2 flex items-start"><i className="fa fa-map-marker-alt me-3 mt-1"></i>Via della Valle 39, 20841, Carate Brianza (MB)</p>
            <p className="mb-2 flex items-center"><i className="fa fa-phone-alt me-3"></i>0362992142</p>
            <p className="mb-2 flex items-center"><i className="fa fa-envelope me-3"></i>info@lc-energia.it</p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-700 py-6">
          <div className="text-center text-sm">
            &copy; <a href="#">LC Energia</a>, 2024. 
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;