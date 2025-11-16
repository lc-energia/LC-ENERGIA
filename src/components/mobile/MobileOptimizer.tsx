'use client';

import { useEffect } from 'react';
import { initMobileOptimizations } from '@/lib/mobile-optimizations';

/**
 * Componente que inicializa todas las optimizaciones móviles
 * Best Practice 2025: Mobile-First optimization
 */
export const MobileOptimizer = () => {
  useEffect(() => {
    // Inicializar optimizaciones móviles
    initMobileOptimizations();

    // Agregar clase al body para estilos específicos de móvil
    if (typeof window !== 'undefined') {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      if (isMobile) {
        document.body.classList.add('is-mobile');
      }

      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;

      if (isTouch) {
        document.body.classList.add('is-touch');
      }
    }
  }, []);

  return null; // Este componente no renderiza nada
};
