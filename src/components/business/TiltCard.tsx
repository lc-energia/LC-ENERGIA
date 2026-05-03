'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  scale?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  intensity = 15,
  perspective = 1000,
  scale = 1.05,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcular posición del cursor relativa al centro de la card
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // Normalizar a valores entre -1 y 1
    const normalizedX = x / (rect.width / 2);
    const normalizedY = y / (rect.height / 2);

    // Aplicar intensidad
    const tiltX = -normalizedY * intensity;
    const tiltY = normalizedX * intensity;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  // Reset en touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setTilt({ x: 0, y: 0 });
      setIsHovering(false);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative transition-all duration-200 ease-out',
        'hover:shadow-2xl hover:z-10',
        className
      )}
      style={{
        transform: `
          perspective(${perspective}px)
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
          scale(${isHovering ? scale : 1})
        `,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Efecto de brillo dinámico */}
      {isHovering && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-10"
          style={{
            background: `
              radial-gradient(
                circle at
                ${50 + (tilt.y / intensity) * 50}%
                ${50 + (tilt.x / intensity) * 50}%,
                rgba(255, 140, 0, 0.3) 0%,
                transparent 50%
              )
            `,
            transform: 'translateZ(20px)'
          }}
        />
      )}

      {/* Contenido de la card */}
      <div
        className="relative z-20"
        style={{
          transform: 'translateZ(10px)'
        }}
      >
        {children}
      </div>

      {/* Sombra dinámica */}
      {isHovering && (
        <div
          className="absolute inset-0 bg-black/10 rounded-[inherit] -z-10"
          style={{
            transform: `
              translateZ(-20px)
              translateY(${Math.abs(tilt.x) * 2}px)
              translateX(${-tilt.y * 2}px)
            `,
            filter: 'blur(20px)',
            opacity: 0.3
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;