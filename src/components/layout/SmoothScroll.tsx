'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame to prevent stacking
      cancelAnimationFrame(rafRef.current);
      // Schedule update on next animation frame for smooth 60fps
      rafRef.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateScrollProgress]);

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