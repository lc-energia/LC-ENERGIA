'use client';

import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Inicializar Lenis para smooth scroll profesional
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Conectar Lenis con GSAP ScrollTrigger para compatibilidad
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Actualizar barra de progreso de scroll
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateScrollProgress);

    // Actualizar progreso inicial
    updateScrollProgress();

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar - Barra superior con gradiente LC Energia */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary to-secondary transition-all duration-150 ease-out shadow-sm"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? '0 0 8px rgba(255, 140, 0, 0.4)' : 'none'
          }}
        />
      </div>

      {children}
    </>
  );
};

export default SmoothScroll;