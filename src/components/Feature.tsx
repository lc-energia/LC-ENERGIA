'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Counter from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faCheck, faAward, faLeaf } from '@fortawesome/free-solid-svg-icons';

interface FeatureData {
  icon: IconDefinition;
  count: string;
  suffix: string;
  title: string;
  description: string;
}

const Feature = () => {
  const features: FeatureData[] = [
    {
      icon: faUsers,
      count: "200",
      suffix: "+",
      title: "Oltre 200 Progetti",
      description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità."
    },
    {
      icon: faCheck,
      count: "2000",
      suffix: "kW",
      title: "Oltre 2000 kW Installati",
      description: "Capacità energetica installata per diverse soluzioni sostenibili."
    },
    {
      icon: faAward,
      count: "2500",
      suffix: "kWh",
      title: "Oltre 2500 kWh Prodotti",
      description: "Energia prodotta per alimentare abitazioni e imprese."
    },
    {
      icon: faLeaf,
      count: "1750",
      suffix: "T",
      title: "1750 Tonnellate di Co2 evitate",
      description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white to-neutral-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-200 mb-4">
            I Nostri <span className="text-primary">Risultati</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Numeri che parlano del nostro impegno per l'efficienza energetica e la sostenibilità
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn('up', 0)}
              className="text-center group"
            >
              <div className="relative mb-8">
                {/* Icon with background */}
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 group-hover:scale-175 transition-transform duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center shadow-primary hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <FontAwesomeIcon icon={feature.icon} className="text-white text-3xl" />
                  </div>
                </div>
              </div>

              {/* Counter Display */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-baseline">
                  <Counter from={0} to={parseInt(feature.count)} />
                  <span className="text-3xl lg:text-4xl font-bold text-dark-200 ml-1">{feature.suffix}</span>
                </div>
              </div>

              {/* Content */}
              <h5 className="text-xl lg:text-2xl font-bold text-dark-200 mb-3">{feature.title}</h5>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{feature.description}</p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary transition-all duration-300 hover:scale-105"
          >
            Unisciti ai nostri successi
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
