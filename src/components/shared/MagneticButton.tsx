'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  scale?: number;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  intensity = 0.3,
  scale = 1.05,
  onClick,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcular distancia desde el centro del botón
    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    // Limitar el movimiento máximo
    const maxDistance = 15;
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  // Reset en touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setPosition({ x: 0, y: 0 });
      setIsHovering(false);
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      className={cn(
        'relative transition-all duration-300 ease-out',
        'hover:shadow-lg hover:z-10',
        'cursor-pointer',
        className
      )}
      style={{
        transform: `
          translate(${position.x}px, ${position.y}px)
          scale(${isHovering ? scale : 1})
        `,
        willChange: 'transform'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Efecto de campo magnético visual */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-[inherit] opacity-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at
                ${50 + (position.x / 15) * 30}%
                ${50 + (position.y / 15) * 30}%,
                rgba(255, 140, 0, 0.2) 0%,
                transparent 60%
              )
            `,
            transform: 'scale(1.2)',
            filter: 'blur(8px)'
          }}
        />
      )}

      {/* Contenido del botón */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Efecto de ripple en hover */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-[inherit] border-2 border-primary/20 animate-ping"
          style={{
            animationDuration: '1s',
            transform: 'scale(1.05)'
          }}
        />
      )}
    </button>
  );
};

export default MagneticButton;