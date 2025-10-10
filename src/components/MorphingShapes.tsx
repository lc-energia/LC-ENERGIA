'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

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
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default MorphingShapes;