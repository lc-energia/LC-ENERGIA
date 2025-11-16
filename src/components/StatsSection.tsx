'use client';

import { motion } from 'framer-motion';
import { StatCard } from './shared/Counter';
import Link from 'next/link';
import {
  faSolarPanel,
  faLightbulb,
  faLeaf,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StatsSection = () => {
  const stats = [
    {
      number: 200,
      label: 'Progetti Completati',
      icon: <FontAwesomeIcon icon={faSolarPanel} />,
      delay: 0
    },
    {
      number: 2000,
      label: 'kW Installati',
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      delay: 0.2
    },
    {
      number: 25,
      label: 'Anni di Esperienza',
      icon: <FontAwesomeIcon icon={faLeaf} />,
      delay: 0.4
    },
    {
      number: 98,
      label: 'Clienti Soddisfatti %',
      icon: <FontAwesomeIcon icon={faAward} />,
      delay: 0.6,
      suffix: '%'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #FF8C00 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #8BC34A 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, #FF8C00 0%, transparent 50%)
          `,
          backgroundSize: '300px 300px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-200 mb-4">
            Numeri che Parlano
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Più di 25 anni di esperienza nel settore delle energie rinnovabili,
            con centinaia di progetti realizzati e migliaia di clienti soddisfatti.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center font-semibold text-white bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
            >
              Richiedi una Consulenza Gratuita
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default StatsSection;