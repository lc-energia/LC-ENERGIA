'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCheck, faAward, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { staggerContainer, cardEntrance, iconPop, viewportSettings } from '@/lib/animation-variants';

// Contador animado simple y robusto
const AnimatedCounter: React.FC<{
  to: number;
  suffix?: string;
}> = ({ to, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
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
  }, [to]);

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

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, startCounting]);

  return (
    <div ref={containerRef} className="text-5xl font-bold mb-2 relative">
      <div className="flex items-center justify-center">
        <motion.span
          className="font-black text-gradient-primary stats-number"
          style={{ fontSize: '3rem' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          {count.toLocaleString('it-IT')}
        </motion.span>
        <motion.span
          className="font-black ml-1 text-gradient-secondary stats-number"
          style={{ fontSize: '3rem' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.2 }}
        >
          {suffix}
        </motion.span>
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
      className="text-center p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 relative overflow-hidden group hover-lift hover-shine"
      variants={cardEntrance}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{
        scale: 1.05,
      }}
      style={{ minHeight: '320px' }}
    >
      {/* Gradiente de fondo animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-combined opacity-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Efecto de brillo animado */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.5), transparent)',
          transform: 'translateX(-100%)'
        }}
        animate={{
          transform: ['translateX(-100%)', 'translateX(100%)'],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Resplandor externo con colores institucionales */}
      <motion.div
        className="absolute -inset-1 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(155, 189, 45, 0.4), rgba(244, 153, 24, 0.4))',
          filter: 'blur(20px)',
          zIndex: -1
        }}
      />

      {/* Icono con animación mejorada */}
      <div className="flex justify-center mb-6">
        <motion.div
          variants={iconPop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Fondo del icono con gradiente */}
          <div className="absolute inset-0 bg-gradient-combined rounded-full opacity-20 animate-pulse-soft" />
          <div className="relative w-20 h-20 bg-gradient-combined rounded-full flex items-center justify-center shadow-combined">
            <div className="text-4xl text-white drop-shadow-lg">
              {icon}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Número con contador animado */}
      <div className="mb-4">
        <AnimatedCounter
          to={number}
          suffix={suffix}
        />
      </div>

      {/* Título con gradiente en hover */}
      <motion.h3
        className="text-xl font-bold text-dark-200 mb-4 group-hover:text-gradient-combined transition-all duration-300"
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
        style={{ minHeight: '60px' }}
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(155, 189, 45, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(244, 153, 24, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de sección opcional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-combined mb-4">
            In Cifre 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L&apos;esperienza e i risultati che ci contraddistinguono nel settore dell&apos;energia sostenibile
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
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