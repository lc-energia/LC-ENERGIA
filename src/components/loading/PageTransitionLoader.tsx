'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Loading elegante con logo para transiciones de página
 * Best Practice 2025: Mostrar feedback visual durante navegación
 */
export const PageTransitionLoader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    // Simular carga mínima para mostrar el loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          style={{ pointerEvents: 'none' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            {/* Logo con animación */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-24 h-24 sm:w-32 sm:h-32"
            >
              <Image
                src="/img/logo.png"
                alt="LC Energia"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Barra de progreso animada */}
            <div className="w-32 sm:w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                className="h-full bg-gradient-combined"
              />
            </div>

            {/* Puntos animados */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-gradient-combined"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Skeleton loader para contenido
 * Mejor práctica: Mostrar estructura mientras carga
 */
export const ContentSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Header skeleton */}
      <div className="h-8 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />

      {/* Content skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>

      {/* Image skeleton */}
      <div className="h-48 bg-gray-200 rounded" />
    </div>
  );
};

/**
 * Loader minimalista para componentes pequeños
 */
export const MiniLoader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="w-8 h-8 border-3 border-gray-200 border-t-primary-500 rounded-full"
      />
    </div>
  );
};

/**
 * Loading con logo para primera carga
 */
export const InitialLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-white"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo con animación de entrada */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          className="relative w-32 h-32 sm:w-40 sm:h-40"
        >
          <Image
            src="/img/logo.png"
            alt="LC Energia"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Barra de progreso circular */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="44"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-gray-200"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="44"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: '0 276.46' }}
              animate={{
                strokeDasharray: `${(progress / 100) * 276.46} 276.46`,
              }}
              transition={{ duration: 0.3 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9BBD2D" />
                <stop offset="100%" stopColor="#F49918" />
              </linearGradient>
            </defs>
          </svg>

          {/* Porcentaje */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              key={progress}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-lg font-bold text-gradient-combined"
            >
              {progress}%
            </motion.span>
          </div>
        </div>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-600 font-medium"
        >
          Cargando experiencia energética...
        </motion.p>
      </div>
    </motion.div>
  );
};
