'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonialData } from '@/data/carousel-data';

/**
 * Loading REAL sincronizado con la carga completa de la página
 * Best Practice 2025: Muestra loader hasta que página esté lista
 */
export const RealPageLoader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    // Mostrar loader al cambiar de ruta
    setIsLoading(true);

    // Seleccionar frase aleatoria
    setCurrentPhraseIndex(Math.floor(Math.random() * testimonialData.length));

    // Detectar cuando la página está completamente cargada
    const handlePageLoad = () => {
      // Esperar mínimo 1.5s para que se pueda leer la frase
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    // Si la página ya está cargada
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      // Esperar a que termine de cargar
      window.addEventListener('load', handlePageLoad);

      return () => {
        window.removeEventListener('load', handlePageLoad);
      };
    }
  }, [pathname]);

  // Cambiar frase cada 3 segundos mientras está cargando
  useEffect(() => {
    if (!isLoading) return;

    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % testimonialData.length);
    }, 3000);

    return () => clearInterval(phraseInterval);
  }, [isLoading]);

  const currentPhrase = testimonialData[currentPhraseIndex];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          {/* Efectos de fondo decorativos */}
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
            <AnimatePresence mode="wait">
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
            </AnimatePresence>

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

                {/* Shimmer effect adicional */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{ width: '50%' }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};
