'use client';

import { useState, useRef, useCallback, useMemo } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface MousePosition {
  x: number;
  y: number;
}

// Throttle utility function
const throttle = <T extends (...args: Parameters<T>) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const useTiltEffect = () => {
  const prefersReducedMotion = useReducedMotion();
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const elementRef = useRef<HTMLDivElement>(null);

  const updateTransform = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current || prefersReducedMotion) return;

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
  }, [prefersReducedMotion]);

  // Throttle mouse move to 60fps (16ms)
  const handleMouseMove = useMemo(
    () => throttle(updateTransform, 16),
    [updateTransform]
  );

  const handleMouseLeave = () => {
    setTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
    setMousePosition({ x: 50, y: 50 });
  };

  // Memoized styles - respect reduced motion
  const transformStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        transformStyle: 'preserve-3d' as const,
      };
    }
    return {
      transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
      transformStyle: 'preserve-3d' as const,
      willChange: 'transform' as const,
      transition: 'transform 0.2s ease-out',
    };
  }, [transform, prefersReducedMotion]);

  const lightingStyle = useMemo(() => {
    if (prefersReducedMotion) {
      return {};
    }
    return {
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 40%)`,
    };
  }, [mousePosition, prefersReducedMotion]);

  // Legacy function getters for backward compatibility
  const getTransformStyle = useCallback(() => transformStyle, [transformStyle]);
  const getLightingStyle = useCallback(() => lightingStyle, [lightingStyle]);

  return {
    elementRef,
    handleMouseMove,
    handleMouseLeave,
    getTransformStyle,
    getLightingStyle,
    // Direct style access (preferred)
    transformStyle,
    lightingStyle,
    prefersReducedMotion,
  };
};