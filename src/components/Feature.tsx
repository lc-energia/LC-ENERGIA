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
      </div>
    </section>
  );
};

export default Feature;