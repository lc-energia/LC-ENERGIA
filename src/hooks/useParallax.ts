'use client';

import { useState, useEffect } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      setOffsetY(rate);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calcular posición inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return offsetY;
};