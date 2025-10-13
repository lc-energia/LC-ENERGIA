/**
 * Variantes de animación estandarizadas para Framer Motion
 * Sistema unificado de animaciones para LC Energia
 */

import { Variants } from 'framer-motion';

// ============================================
// VARIANTES DE FADE
// ============================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// ============================================
// VARIANTES DE SLIDE
// ============================================

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// ============================================
// VARIANTES DE SCALE
// ============================================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const scaleInSpring: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }
  }
};

// ============================================
// VARIANTES DE STAGGER (para contenedores)
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    }
  }
};

// ============================================
// VARIANTES DE HOVER (para interactividad)
// ============================================

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    }
  }
};

export const hoverLift = {
  rest: {
    y: 0,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  hover: {
    y: -8,
    boxShadow: '0 15px 40px rgba(155, 189, 45, 0.15), 0 10px 30px rgba(244, 153, 24, 0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  }
};

export const hoverGlow = {
  rest: {
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  },
  hover: {
    boxShadow: '0 10px 30px rgba(155, 189, 45, 0.25), 0 10px 30px rgba(244, 153, 24, 0.25)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  }
};

// ============================================
// VARIANTES ESPECIALES INSTITUCIONALES
// ============================================

export const cardEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

export const iconPop: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.2,
    }
  }
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.4, 0, 0.2, 1],
    }
  })
};

// ============================================
// VARIANTES CON GRADIENTE (para títulos)
// ============================================

export const gradientTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    backgroundPosition: '0% 50%',
  },
  visible: {
    opacity: 1,
    y: 0,
    backgroundPosition: '100% 50%',
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
      backgroundPosition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    }
  }
};

// ============================================
// VARIANTES DE BOTONES
// ============================================

export const buttonHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 15px rgba(155, 189, 45, 0.2)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(155, 189, 45, 0.3), 0 5px 15px rgba(244, 153, 24, 0.2)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    }
  },
  tap: {
    scale: 0.95,
  }
};

export const buttonPulse: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
    }
  }
};

// ============================================
// VARIANTES DE SECCIÓN
// ============================================

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

export const parallaxSection: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
    }
  }
};

// ============================================
// FUNCIÓN DE AYUDA PARA CREAR VARIANTES CON DELAY
// ============================================

export const createDelayedVariant = (
  baseVariant: Variants,
  delay: number
): Variants => {
  return {
    ...baseVariant,
    visible: {
      ...(typeof baseVariant.visible === 'object' ? baseVariant.visible : {}),
      transition: {
        ...(typeof baseVariant.visible === 'object' && 'transition' in baseVariant.visible
          ? baseVariant.visible.transition
          : {}),
        delay,
      }
    }
  };
};

// ============================================
// PRESET DE VIEWPORT PARA INTERSECTIONOBSERVER
// ============================================

export const viewportSettings = {
  once: true,
  amount: 0.25,
  margin: '-100px',
};

export const viewportSettingsLazy = {
  once: true,
  amount: 0.1,
  margin: '0px',
};

// ============================================
// EXPORTAR TODO COMO DEFAULT
// ============================================

const animationVariants = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleInSpring,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  hoverScale,
  hoverLift,
  hoverGlow,
  cardEntrance,
  iconPop,
  textReveal,
  gradientTitle,
  buttonHover,
  buttonPulse,
  sectionReveal,
  parallaxSection,
  createDelayedVariant,
  viewportSettings,
  viewportSettingsLazy,
};

export default animationVariants;
