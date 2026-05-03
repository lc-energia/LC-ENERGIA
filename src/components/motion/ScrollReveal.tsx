'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

/**
 * Componente para revelar contenido al hacer scroll
 * Inspirado en ENGIE UK - Best Practice 2025
 */

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className = '',
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === 'up' && { y: 40 }),
      ...(direction === 'down' && { y: -40 }),
      ...(direction === 'left' && { x: -40 }),
      ...(direction === 'right' && { x: 40 }),
      ...(direction === 'scale' && { scale: 0.8 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Componente para revelar hijos en secuencia (stagger)
 */
interface ScrollRevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  childDelay?: number;
  className?: string;
}

export const ScrollRevealStagger = ({
  children,
  staggerDelay = 0.1,
  childDelay = 0,
  className = '',
}: ScrollRevealStaggerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

/**
 * Componente de título que se revela con efecto especial
 */
interface ScrollRevealTitleProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const ScrollRevealTitle = ({
  children,
  className = '',
  gradient = false,
}: ScrollRevealTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`${className} ${gradient ? 'text-gradient-combined' : ''}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.h2>
  );
};

/**
 * Componente de imagen con reveal suave
 */
interface ScrollRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayEffect?: boolean;
}

export const ScrollRevealImage = ({
  src,
  alt,
  className = '',
  overlayEffect = true,
}: ScrollRevealImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      {overlayEffect && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : { x: '-100%' }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-gradient-combined z-10"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};


/**
 * Línea divisoria animada que crece al hacer scroll
 */
interface ScrollRevealDividerProps {
  className?: string;
  color?: string;
}

export const ScrollRevealDivider = ({
  className = '',
  color = 'bg-gradient-combined',
}: ScrollRevealDividerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <div ref={ref} className={`w-full h-px bg-gray-200 ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-full origin-left ${color}`}
      />
    </div>
  );
};

/**
 * Card que se revela con efecto 3D
 */
interface ScrollReveal3DCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal3DCard = ({
  children,
  className = '',
  delay = 0,
}: ScrollReveal3DCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        rotateX: -15,
        y: 50,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              rotateX: 0,
              y: 0,
            }
          : {
              opacity: 0,
              rotateX: -15,
              y: 50,
            }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
