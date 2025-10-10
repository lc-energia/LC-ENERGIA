'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Complete loading after 2.5 seconds minimum
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete();
      }, 300);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  const containerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    },
    exit: {
      scale: 1.1,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const particlesVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-white to-secondary overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                variants={particlesVariants}
                initial="initial"
                animate="animate"
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Loading content */}
          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mb-12"
            >
              <div className="relative">
                <div className="w-24 h-24 mx-auto relative">
                  {/* Animated circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-white/30 border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Inner circle with gradient */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/90 to-white/70 flex items-center justify-center">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      LC
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                LC Energia
              </h1>
              <p className="text-lg text-white/80 font-light">
                Soluzioni energetiche innovative
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="max-w-md mx-auto"
            >
              <div className="relative">
                {/* Progress bar background */}
                <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                  {/* Progress bar fill */}
                  <motion.div
                    variants={progressVariants}
                    initial="initial"
                    animate="animate"
                    className="h-full bg-gradient-to-r from-white/80 to-white rounded-full relative"
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{ x: [-100, 200] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Progress percentage */}
                <div className="mt-4 text-white/80 font-medium">
                  {Math.round(progress)}%
                </div>
              </div>
            </motion.div>

            {/* Loading message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 text-white/60 text-sm"
            >
              <motion.p
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Caricamento...
              </motion.p>
            </motion.div>
          </div>

          {/* Gradient overlay effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
              style={{
                filter: 'blur(100px)',
                transform: 'translate(-50%, -50%)'
              }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
              style={{
                filter: 'blur(100px)',
                transform: 'translate(50%, 50%)'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;