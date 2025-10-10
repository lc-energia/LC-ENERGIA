'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, motion } from 'framer-motion';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimal?: number;
  ease?: string;
}

const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className = '',
  decimal = 0,
  ease = 'easeOut'
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [displayValue, setDisplayValue] = useState(from);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView && ref.current) {
      // Animación de entrada con escala
      animate(from, to, {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // easeOut cubic bezier
        onUpdate: (value) => {
          const formattedValue = decimal > 0 ? value.toFixed(decimal) : Math.round(value).toString();
          setDisplayValue(Number(formattedValue));
        },
        onComplete: () => {
          // Efecto de pulso final
          if (ref.current) {
            ref.current.style.transform = 'scale(1.1)';
            setTimeout(() => {
              if (ref.current) {
                ref.current.style.transform = 'scale(1)';
              }
            }, 200);
          }
        }
      });
    }
  }, [inView, from, to, duration, delay, decimal, ease]);

  // Formatear el número con separadores de miles
  const formatNumber = (num: number) => {
    return num.toLocaleString('it-IT');
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: 'backOut'
      }}
      style={{
        textShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {prefix}
        {formatNumber(displayValue)}
        {suffix}
      </span>

      {/* Efecto de brillo en la animación */}
      {inView && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.5,
            delay: delay + 0.5,
            ease: 'easeInOut'
          }}
        />
      )}
    </motion.div>
  );
};

// Componente de estadística completa
export const StatCard: React.FC<{
  number: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
}> = ({ number, label, prefix = '', suffix = '', icon, delay = 0 }) => {
  return (
    <motion.div
      className="text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
    >
      {icon && (
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
      )}

      <div className="text-5xl font-bold mb-2 relative">
        <Counter
          from={0}
          to={number}
          delay={delay + 0.4}
          duration={2}
          prefix={prefix}
          suffix={suffix}
        />
      </div>

      <motion.p
        className="text-gray-600 text-lg font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.8 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default Counter;
