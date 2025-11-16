'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface MorphingShapesProps {
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const MorphingShapes: React.FC<MorphingShapesProps> = ({
  className = "",
  intensity = 'medium'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const intensityConfig = {
    subtle: {
      opacity: 0.1,
      blur: 80,
      scale: 1,
      speed: 20
    },
    medium: {
      opacity: 0.15,
      blur: 60,
      scale: 1.2,
      speed: 15
    },
    strong: {
      opacity: 0.2,
      blur: 40,
      scale: 1.5,
      speed: 10
    }
  };

  const config = intensityConfig[intensity];

  // Transform values for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const shapes = [
    {
      id: 'shape1',
      initial: {
        x: '10%',
        y: '20%',
        scale: 0.8,
        rotate: 0
      },
      animate: {
        x: ['10%', '25%', '15%', '10%'],
        y: ['20%', '30%', '35%', '20%'],
        rotate: [0, 180, 360],
        scale: [0.8, 1.2, 0.9, 0.8]
      },
      gradient: 'from-primary/20 to-primary/40',
      size: 300,
      morph: 'blob'
    },
    {
      id: 'shape2',
      initial: {
        x: '80%',
        y: '60%',
        scale: 1.2,
        rotate: 45
      },
      animate: {
        x: ['80%', '70%', '85%', '80%'],
        y: ['60%', '45%', '55%', '60%'],
        rotate: [45, 225, 405],
        scale: [1.2, 0.9, 1.1, 1.2]
      },
      gradient: 'from-secondary/20 to-secondary/40',
      size: 250,
      morph: 'ellipse'
    },
    {
      id: 'shape3',
      initial: {
        x: '50%',
        y: '80%',
        scale: 0.6,
        rotate: -30
      },
      animate: {
        x: ['50%', '35%', '55%', '50%'],
        y: ['80%', '65%', '75%', '80%'],
        rotate: [-30, 150, 330],
        scale: [0.6, 1.3, 0.8, 0.6]
      },
      gradient: 'from-primary/15 to-secondary/15',
      size: 400,
      morph: 'rounded'
    },
    {
      id: 'shape4',
      initial: {
        x: '20%',
        y: '70%',
        scale: 1.5,
        rotate: 90
      },
      animate: {
        x: ['20%', '15%', '25%', '20%'],
        y: ['70%', '80%', '75%', '70%'],
        rotate: [90, 270, 450],
        scale: [1.5, 1.0, 1.3, 1.5]
      },
      gradient: 'from-secondary/25 to-primary/10',
      size: 200,
      morph: 'triangle'
    },
    {
      id: 'shape5',
      initial: {
        x: '70%',
        y: '15%',
        scale: 0.9,
        rotate: 120
      },
      animate: {
        x: ['70%', '75%', '65%', '70%'],
        y: ['15%', '25%', '20%', '15%'],
        rotate: [120, 300, 480],
        scale: [0.9, 1.4, 1.1, 0.9]
      },
      gradient: 'from-primary/18 to-secondary/22',
      size: 180,
      morph: 'hexagon'
    }
  ];

  const getMorphPath = (type: string) => {
    switch (type) {
      case 'blob':
        return 'M50,10 Q90,30 90,70 Q70,90 50,90 Q10,70 10,50 Q30,10 50,10';
      case 'ellipse':
        return 'M25,10 Q75,10 90,50 Q75,90 25,90 Q10,50 25,10';
      case 'triangle':
        return 'M50,15 L85,85 L15,85 Z';
      case 'hexagon':
        return 'M30,10 L70,10 L90,50 L70,90 L30,90 L10,50 Z';
      default:
        return 'M20,20 Q80,20 80,80 Q20,80 20,20';
    }
  };

  // Fixed floating particle positions to avoid hydration mismatch
  const FLOATING_PARTICLES = [
    { left: 48.21, top: 38.61, duration: 15, delay: 1.5, xRange: -12 },
    { left: 84.14, top: 50.11, duration: 18, delay: 0.8, xRange: 18 },
    { left: 78.47, top: 72.37, duration: 12, delay: 2.1, xRange: -5 },
    { left: 57.76, top: 71.08, duration: 20, delay: 0.3, xRange: 8 },
    { left: 18.19, top: 10.24, duration: 14, delay: 1.8, xRange: -15 },
    { left: 40.46, top: 52.94, duration: 16, delay: 0.6, xRange: 3 },
    { left: 69.56, top: 81.06, duration: 19, delay: 2.4, xRange: -8 },
    { left: 42.06, top: 86.66, duration: 13, delay: 1.2, xRange: 12 },
    { left: 58.02, top: 97.88, duration: 17, delay: 0.9, xRange: -2 },
    { left: 45.97, top: 65.28, duration: 15, delay: 1.7, xRange: 6 },
    { left: 47.48, top: 93.11, duration: 18, delay: 0.4, xRange: -10 },
    { left: 91.88, top: 88.69, duration: 14, delay: 2.2, xRange: 15 },
    { left: 52.38, top: 82.05, duration: 16, delay: 1.1, xRange: -7 },
    { left: 9.12, top: 50.82, duration: 20, delay: 0.5, xRange: 11 },
    { left: 85.21, top: 19.19, duration: 12, delay: 1.9, xRange: -4 }
  ];

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {shapes.map((shape, index) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={shape.initial}
          animate={{
            ...shape.animate,
            transition: {
              duration: config.speed + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse"
            }
          }}
          style={{
            width: `${shape.size * config.scale}px`,
            height: `${shape.size * config.scale}px`,
            opacity: config.opacity,
            filter: `blur(${config.blur}px)`,
            y: index === 0 ? y1 : index === 2 ? y2 : y3,
            rotate: index === 0 ? rotate1 : index === 1 ? rotate2 : undefined
          }}
        >
          <motion.div
            className={`w-full h-full bg-gradient-to-br ${shape.gradient} rounded-full`}
            style={{
              clipPath: shape.morph !== 'rounded' ? `path('${getMorphPath(shape.morph)}')` : undefined
            }}
          />

          {/* Additional glow effect */}
          <motion.div
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${shape.gradient} rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: config.speed * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              filter: `blur(${config.blur * 1.5}px)`
            }}
          />
        </motion.div>
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="10%"
          y1="20%"
          x2="80%"
          y2="60%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          strokeOpacity="0.1"
          animate={{
            x2: ['80%', '70%', '85%', '80%'],
            y2: ['60%', '45%', '55%', '60%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.line
          x1="50%"
          y1="80%"
          x2="20%"
          y2="70%"
          stroke="url(#gradient2)"
          strokeWidth="1"
          strokeOpacity="0.1"
          animate={{
            x1: ['50%', '35%', '55%', '50%'],
            y1: ['80%', '65%', '75%', '80%']
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8BC34A" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8BC34A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {FLOATING_PARTICLES.map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xRange, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default MorphingShapes;