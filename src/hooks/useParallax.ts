'use client';

import { useState, useEffect, useRef } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;

      // Solo aplicar parallax cuando el elemento está visible
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular posición inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { ref, offsetY };
};