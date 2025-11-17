'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { testimonialData } from '@/data/carousel-data';

/**
 * Loading inteligente que se sincroniza con la carga REAL de la página
 * Muestra frases motivacionales mientras carga
 * Best Practice 2025: Real loading feedback
 */
export const SmartPageLoader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    // Marcar como loading al cambiar de ruta
    setIsLoading(true);
    setLoadingProgress(0);

    // Seleccionar frase aleatoria
    setCurrentPhraseIndex(Math.floor(Math.random() * testimonialData.length));

    // Simular progreso inicial rápido (0-30%)
    const initialProgress = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 30) return prev + 10;
        clearInterval(initialProgress);
        return prev;
      });
    }, 100);

    // Progreso medio mientras carga (30-70%)
    const mediumProgress = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 70) return prev + 5;
        clearInterval(mediumProgress);
        return prev;
      });
    }, 200);

    // Detectar cuando la página está realmente lista
    const checkPageReady = () => {
      if (document.readyState === 'complete') {
        // Completar progreso rápidamente
        const finalProgress = setInterval(() => {
          setLoadingProgress((prev) => {
            if (prev < 100) return prev + 10;
            clearInterval(finalProgress);
            return 100;
          });
        }, 50);

        // Ocultar loader después de que llegue a 100%
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    };

    // Escuchar eventos de carga
    if (document.readyState === 'complete') {
      checkPageReady();
    } else {
      window.addEventListener('load', checkPageReady);
      // También verificar cada 100ms
      const checkInterval = setInterval(() => {
        if (document.readyState === 'complete') {
          checkPageReady();
          clearInterval(checkInterval);
        }
      }, 100);

      return () => {
        window.removeEventListener('load', checkPageReady);
        clearInterval(checkInterval);
      };
    }

    return () => {
      clearInterval(initialProgress);
      clearInterval(mediumProgress);
    };
  }, [pathname]);

  // Cambiar frase cada 3 segundos si aún está cargando
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-white"
          style={{ backdropFilter: 'blur(10px)' }}
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

            {/* Barra de progreso con porcentaje */}
            <div className="w-full max-w-md space-y-3">
              {/* Porcentaje */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="font-medium">Cargando</span>
                <motion.span
                  key={loadingProgress}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="font-bold text-primary-600"
                >
                  {loadingProgress}%
                </motion.span>
              </div>

              {/* Barra de progreso */}
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-combined rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
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
