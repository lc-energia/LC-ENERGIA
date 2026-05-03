'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

/**
 * Botón con efecto magnético inspirado en ENGIE UK
 * Timing óptimo: 150-250ms según mejores prácticas 2025
 */
interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  strength = 0.3,
  className = '',
  onClick,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

/**
 * Tarjeta con efecto de brillo al pasar el cursor (shimmer effect)
 */
interface ShimmerCardProps {
  children: ReactNode;
  className?: string;
}

export const ShimmerCard = ({ children, className = '' }: ShimmerCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {children}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        }}
        variants={{
          rest: { x: '-100%' },
          hover: { x: '100%' },
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

/**
 * Icono con efecto de rotación suave en hover
 */
interface IconHoverProps {
  children: ReactNode;
  rotationDegrees?: number;
}

export const IconHover = ({ children, rotationDegrees = 10 }: IconHoverProps) => {
  return (
    <motion.div
      whileHover={{
        rotate: rotationDegrees,
        scale: 1.1,
      }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Texto con efecto de gradiente animado
 */
interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedGradientText = ({
  children,
  className = '',
}: AnimatedGradientTextProps) => {
  return (
    <motion.span
      className={className}
      style={{
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
};

/**
 * Indicador de scroll animado
 */
export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-gradient-combined rounded-full"
          animate={{
            y: [0, 16, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      <motion.p
        className="text-xs text-gray-500 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.p>
    </motion.div>
  );
};

/**
 * Contenedor con efecto parallax suave
 */
interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
}

export const ParallaxContainer = ({
  children,
  className = '',
}: ParallaxContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const ySmooth = useSpring(y, { damping: 50, stiffness: 200 });

  return (
    <motion.div ref={ref} style={{ y: ySmooth }} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * Botón con efecto de ondas (ripple) al hacer click
 */
interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const RippleButton = ({ children, className = '', onClick }: RippleButtonProps) => {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{
          scale: 2.5,
          opacity: 0,
          transition: { duration: 0.4 },
        }}
      />
      {children}
    </motion.button>
  );
};

/**
 * Tarjeta que se inclina siguiendo el cursor (3D tilt)
 */
interface TiltCardMicroProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export const TiltCardMicro = ({
  children,
  className = '',
  maxTilt = 15,
}: TiltCardMicroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    x.set(percentX);
    y.set(percentY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Loader con puntos animados
 */
export const DotLoader = () => {
  const dotVariants = {
    start: { y: 0 },
    end: { y: -10 },
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-gradient-combined rounded-full"
          variants={dotVariants}
          initial="start"
          animate="end"
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.15,
          }}
        />
      ))}
    </div>
  );
};

/**
 * Badge con animación de pulso
 */
interface PulseBadgeProps {
  children: ReactNode;
  className?: string;
}

export const PulseBadge = ({ children, className = '' }: PulseBadgeProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-combined rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      {children}
    </motion.div>
  );
};
