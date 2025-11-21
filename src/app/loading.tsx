'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { testimonialData } from '@/data/carousel-data';

/**
 * Loading.tsx - Archivo especial de Next.js App Router
 * Se muestra automáticamente mientras la página está cargando
 * Best Practice 2025: Native Next.js loading states
 */
export default function Loading() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Cambiar frase cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % testimonialData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = testimonialData[currentPhraseIndex];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Efectos de fondo decorativos - Mismos del testimonial */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#9BBD2D]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F49918]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto px-6">
        {/* Logo con animación */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-28 h-28 sm:w-36 sm:h-36"
          >
            <Image
              src="/img/logo.png"
              alt="LC Energia"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Anillo giratorio alrededor del logo */}
          <motion.div
            className="absolute inset-0 -m-4"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30" />
          </motion.div>
        </motion.div>

        {/* Frase motivacional con animación */}
        <motion.div
          key={currentPhraseIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center min-h-[80px] flex items-center justify-center"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed bg-gradient-to-r from-[#374151] via-[#4b5563] to-[#374151] bg-clip-text text-transparent px-4">
            {currentPhrase.text}
          </p>
        </motion.div>

        {/* Barra de progreso animada infinitamente */}
        <div className="w-full max-w-md space-y-3">


          {/* Barra de progreso con animación continua */}
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            {/* Progreso infinito */}
            <motion.div
              className="absolute inset-y-0 bg-gradient-combined rounded-full"
              animate={{
                left: ['-40%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ width: '40%' }}
            />
          </div>
        </div>

        {/* Puntos animados decorativos */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-combined"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
