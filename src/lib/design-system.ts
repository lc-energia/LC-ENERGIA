/**
 * Sistema de Diseño Unificado para LC Energia
 * Colores institucionales: Verde #9BBD2D (primary) y Naranja #F49918 (secondary)
 */

// ============================================
// COLORES INSTITUCIONALES
// ============================================
export const colors = {
  // Verde Institucional - Color principal
  primary: {
    50: '#f2f8e6',
    100: '#e5f0cd',
    200: '#d0e3a6',
    300: '#bad67f',
    400: '#a4c958',
    500: '#9BBD2D', // Verde principal
    600: '#8ca928',
    700: '#7c9523',
    800: '#6d811e',
    900: '#5e6d19',
  },

  // Naranja Institucional - Color secundario/acento
  secondary: {
    50: '#fff9e6',
    100: '#fff0cd',
    200: '#ffe3a6',
    300: '#ffd67f',
    400: '#ffc958',
    500: '#F49918', // Naranja principal
    600: '#db8a15',
    700: '#c27a12',
    800: '#a86b0f',
    900: '#8f5c0c',
  },

  // Neutrales
  neutral: {
    50: '#fcfcfc',
    100: '#f7f7f7',
    200: '#eeeeee',
    300: '#e9e9e9',
    400: '#e2e2e2',
    500: '#E2E2E2',
    600: '#b6b6b6',
    700: '#888888',
    800: '#5b5b5b',
    900: '#2d2d2d',
  },

  // Oscuros
  dark: {
    50: '#5b5b5b',
    100: '#2d2d2d',
    200: '#1A2A36',
    300: '#141d26',
    400: '#0e141a',
    500: '#070a0d',
  },

  white: '#ffffff',
} as const;

// ============================================
// GRADIENTES INSTITUCIONALES
// ============================================
export const gradients = {
  // Gradiente principal: Verde a Verde más oscuro
  primary: 'linear-gradient(135deg, #9BBD2D 0%, #7c9523 100%)',

  // Gradiente secundario: Naranja a Naranja más oscuro
  secondary: 'linear-gradient(135deg, #F49918 0%, #c27a12 100%)',

  // Gradiente combinado: Verde a Naranja (para elementos especiales)
  combined: 'linear-gradient(135deg, #9BBD2D 0%, #F49918 100%)',

  // Gradiente invertido: Naranja a Verde (para variedad)
  combinedReverse: 'linear-gradient(135deg, #F49918 0%, #9BBD2D 100%)',

  // Gradiente hero: De naranja a verde con transparencia
  hero: 'linear-gradient(135deg, rgba(244, 153, 24, 0.9) 0%, rgba(244, 153, 24, 0.7) 50%, rgba(155, 189, 45, 0.8) 100%)',

  // Gradiente overlay: Para overlays de fondo
  overlay: 'linear-gradient(180deg, rgba(155, 189, 45, 0.1) 0%, rgba(244, 153, 24, 0.1) 100%)',
} as const;

// ============================================
// SOMBRAS INSTITUCIONALES
// ============================================
export const shadows = {
  // Sombras con colores institucionales
  primary: '0 10px 30px rgba(155, 189, 45, 0.15)',
  primaryHover: '0 15px 40px rgba(155, 189, 45, 0.25)',

  secondary: '0 10px 30px rgba(244, 153, 24, 0.15)',
  secondaryHover: '0 15px 40px rgba(244, 153, 24, 0.25)',

  // Sombras neutrales
  card: '0 4px 15px rgba(0, 0, 0, 0.05)',
  cardHover: '0 10px 30px rgba(0, 0, 0, 0.1)',
  soft: '0 2px 8px rgba(0, 0, 0, 0.04)',

  // Sombra combinada (verde + naranja)
  combined: '0 10px 30px rgba(155, 189, 45, 0.1), 0 10px 30px rgba(244, 153, 24, 0.1)',
} as const;

// ============================================
// ANIMACIONES
// ============================================
export const animations = {
  // Duraciones
  duration: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
  },

  // Easings
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Variantes de Framer Motion
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },

  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
} as const;

// ============================================
// ESTILOS DE COMPONENTES REUTILIZABLES
// ============================================
export const componentStyles = {
  // Botones
  button: {
    primary: {
      base: 'bg-primary-500 text-white hover:bg-primary-600 transition-all duration-300',
      gradient: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300',
      shadow: 'shadow-primary hover:shadow-primaryHover',
    },
    secondary: {
      base: 'bg-secondary-500 text-white hover:bg-secondary-600 transition-all duration-300',
      gradient: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300',
      shadow: 'shadow-secondary hover:shadow-secondaryHover',
    },
    combined: {
      gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-all duration-300',
      shadow: 'shadow-combined',
    },
  },

  // Tarjetas
  card: {
    base: 'bg-white rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300',
    withBorder: 'bg-white rounded-xl border border-neutral-200 shadow-card hover:shadow-cardHover transition-all duration-300',
    glass: 'bg-white/80 backdrop-blur-md rounded-xl border border-white/20 shadow-card hover:shadow-cardHover transition-all duration-300',
    gradient: {
      primary: 'bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 border border-primary-100',
      secondary: 'bg-gradient-to-br from-secondary-50 to-white rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 border border-secondary-100',
      combined: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 border border-neutral-100',
    },
  },

  // Títulos con colores institucionales
  heading: {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    gradient: {
      primary: 'bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent',
      secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-700 bg-clip-text text-transparent',
      combined: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 bg-clip-text text-transparent',
    },
  },

  // Iconos con fondo
  icon: {
    primary: {
      wrapper: 'w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-primary',
      text: 'text-white text-xl',
    },
    secondary: {
      wrapper: 'w-14 h-14 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center shadow-secondary',
      text: 'text-white text-xl',
    },
    combined: {
      wrapper: 'w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-combined',
      text: 'text-white text-xl',
    },
  },

  // Badges
  badge: {
    primary: 'inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold',
    secondary: 'inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold',
    gradient: 'inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-semibold',
  },

  // Secciones
  section: {
    base: 'py-12 sm:py-16 lg:py-20',
    withBackground: {
      white: 'py-12 sm:py-16 lg:py-20 bg-white',
      neutral: 'py-12 sm:py-16 lg:py-20 bg-neutral-50',
      primary: 'py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-white',
      secondary: 'py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-secondary-50 to-white',
      combined: 'py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50',
    },
  },
} as const;

// ============================================
// UTILIDADES
// ============================================
export const utils = {
  // Función para obtener un color con opacidad
  withOpacity: (color: string, opacity: number) => {
    return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  },

  // Función para obtener sombra de color
  getColorShadow: (color: string, opacity: number = 0.15) => {
    return `0 10px 30px ${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  },
};

// ============================================
// CONFIGURACIÓN DE TIPOGRAFÍA
// ============================================
export const typography = {
  fontFamily: {
    heading: 'var(--font-heading, Roboto, sans-serif)',
    body: 'var(--font-body, Open Sans, sans-serif)',
  },

  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
    '8xl': '6rem',     // 96px
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// Exportar todo como default también
const designSystem = {
  colors,
  gradients,
  shadows,
  animations,
  componentStyles,
  utils,
  typography,
};

export default designSystem;
