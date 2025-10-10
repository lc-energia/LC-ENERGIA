'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCheck, faAward, faLeaf } from '@fortawesome/free-solid-svg-icons';

// Contador animado simple y robusto
const AnimatedCounter: React.FC<{
  to: number;
  suffix?: string;
}> = ({ to, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  const startCounting = () => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = to / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.floor(increment * currentStep), to);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(to);
      }
    }, duration / steps);
  };

  return (
    <div ref={containerRef} className="text-5xl font-bold mb-2 relative">
      <div className="flex items-center justify-center">
        <span
          className="font-black bg-gradient-to-r from-[#7db042] via-[#99c34a] to-[#6e9c3a] bg-clip-text text-transparent stats-number"
          style={{ fontSize: '3rem' }}
        >
          {count.toLocaleString('it-IT')}
        </span>
        <span
          className="font-black ml-1 bg-gradient-to-r from-[#e67e00] via-[#F49918] to-[#cc6f00] bg-clip-text text-transparent stats-number"
          style={{ fontSize: '3rem' }}
        >
          {suffix}
        </span>
      </div>
    </div>
  );
};

// Componente personalizado para estadísticas con descripciones
const StatCardWithDescription: React.FC<{
  number: number;
  label: string;
  description: string;
  icon: React.ReactNode;
  suffix: string;
  delay: number;
}> = ({ number, label, description, icon, suffix, delay }) => {

  return (
    <motion.div
      className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg relative overflow-hidden group"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
      style={{ minHeight: '280px' }}
    >
      {/* Efecto de brillo animado */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
          transform: 'translateX(-100%)'
        }}
        whileHover={{
          transform: 'translateX(100%)',
          transition: { duration: 0.6, ease: 'easeInOut' }
        }}
      />
      <motion.div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #7db042, #99c34a, #e67e00, #F49918, #7db042)',
          filter: 'blur(20px)',
          zIndex: -1
        }}
      />
      {/* Icono */}
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: 'spring' }}
          className="text-4xl text-primary"
        >
          {icon}
        </motion.div>
      </div>

      {/* Número con contador animado simple */}
      <div className="mb-2">
        <AnimatedCounter
          to={number}
          suffix={suffix}
        />
      </div>

      {/* Título */}
      <motion.h3
        className="text-xl font-bold text-dark-200 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.6 }}
      >
        {label}
      </motion.h3>

      {/* Descripción */}
      <motion.p
        className="text-gray-600 text-sm leading-relaxed font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.8 }}
        style={{ minHeight: '48px' }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Feature = () => {
  const stats = [
    {
      number: 250,
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
      label: "1750 Tonnellate di Co2 evitate",
      description: "Diminuisci la tua impronta di carbonio contribuendo alla protezione del pianeta.",
      icon: <FontAwesomeIcon icon={faLeaf} />,
      suffix: "T",
      delay: 0.6
    }
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {stats.map((stat, index) => (
            <StatCardWithDescription
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