'use client';

import { useEffect, useState } from 'react';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
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