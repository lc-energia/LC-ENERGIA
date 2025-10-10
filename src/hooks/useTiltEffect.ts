'use client';

import { useState, useRef, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useTiltEffect = () => {
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;

    setTransform({
      rotateX,
      rotateY,
      scale: 1.02,
    });

    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
    setMousePosition({ x: 50, y: 50 });
  };

  const getTransformStyle = () => ({
    transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
    transformStyle: 'preserve-3d' as const,
    willChange: 'transform' as const,
    transition: 'transform 0.2s ease-out',
  });

  const getLightingStyle = () => ({
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)`,
  });

  return {
    elementRef,
    handleMouseMove,
    handleMouseLeave,
    getTransformStyle,
    getLightingStyle,
  };
};