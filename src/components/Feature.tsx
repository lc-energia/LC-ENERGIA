'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { StatCard } from './Counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCheck, faAward, faLeaf } from '@fortawesome/free-solid-svg-icons';

const Feature = () => {
  const stats = [
    {
      number: 200,
      label: "Oltre 200 Progetti",
      description: "Progetti realizzati con successo, garantendo alta qualità e affidabilità.",
      icon: <FontAwesomeIcon icon={faUsers} />,
      suffix: "+",
      delay: 0
    },
    {
      number: 2000,
      label: "Oltre 2000 kW Installati",
      description: "Capacità energetica installata per diverse soluzioni sostenibili.",
      icon: <FontAwesomeIcon icon={faCheck} />,
      suffix: "kW",
      delay: 0.2
    },
    {
      number: 2500,
      label: "Oltre 2500 kWh Prodotti",
      description: "Energia prodotta per alimentare abitazioni e imprese.",
      icon: <FontAwesomeIcon icon={faAward} />,
      suffix: "kWh",
      delay: 0.4
    },
    {
      number: 1750,
      label: "Tonnellate di Co2 evitate",
      description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta.",
      icon: <FontAwesomeIcon icon={faLeaf} />,
      suffix: "T",
      delay: 0.6
    }
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              icon={stat.icon}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;