'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook para animaciones basadas en scroll
 * Best Practice 2025: Scroll-triggered animations son esenciales para UX moderno
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    ...options,
  });

  return { ref, isInView };
};

/**
 * Hook para scroll parallax effect
 */
export const useScrollParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Calcular offset basado en posición del elemento
        if (scrolled + viewportHeight > elementTop && scrolled < elementTop + elementHeight) {
          const offset = (scrolled + viewportHeight - elementTop) * speed;
          setOffsetY(offset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offsetY };
};

/**
 * Hook para detectar scroll progress de un elemento
 */
export const useScrollProgress = () => {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrolled = window.scrollY;

      // Calcular progreso (0 a 1)
      const start = elementTop - viewportHeight;
      const end = elementTop + elementHeight;
      const totalDistance = end - start;
      const currentProgress = (scrolled - start) / totalDistance;

      setProgress(Math.max(0, Math.min(1, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, progress };
};

/**
 * Hook para revelar elementos secuencialmente al hacer scroll
 */
export const useStaggerReveal = (itemCount: number, delayPerItem: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const getItemDelay = (index: number) => {
    return isInView ? index * delayPerItem : 0;
  };

  return { ref, isInView, getItemDelay };
};

/**
 * Hook para contador animado que se activa al hacer scroll
 */
export const useCountUp = (end: number, duration: number = 2000) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (easeOutCubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * (end - startValue) + startValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { ref, count };
};

/**
 * Hook para detectar dirección del scroll
 * Fixed: Use useRef instead of useState for lastScrollY to prevent infinite loop
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDirection;
};
