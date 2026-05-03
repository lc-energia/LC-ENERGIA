/** @type {import('tailwindcss').Config} */
const config = {
    content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        // Brand Colors - Semantic naming
        primary: {
          50: '#f2f8e6',
          100: '#e5f0cd',
          200: '#d0e3a6',
          300: '#bad67f',
          400: '#a4c958',
          500: '#9BBD2D', // Main brand color (Verde)
          600: '#8ca928',
          700: '#7c9523',
          800: '#6d811e',
          900: '#5e6d19',
        },
        secondary: {
          50: '#fff9e6',
          100: '#fff0cd',
          200: '#ffe3a6',
          300: '#ffd67f',
          400: '#ffc958',
          500: '#F49918', // Secondary/CTA color (Naranja)
          600: '#db8a15',
          700: '#c27a12',
          800: '#a86b0f',
          900: '#8f5c0c',
        },
        accent: {
          50: '#fff9e6',
          100: '#fff0cd',
          200: '#ffe3a6',
          300: '#ffd67f',
          400: '#ffc958',
          500: '#F49918', // Accent color (Naranja)
          600: '#db8a15',
          700: '#c27a12',
          800: '#a86b0f',
          900: '#8f5c0c',
        },
        neutral: {
          50: '#fcfcfc', // Neutro muy claro
          100: '#f7f7f7', // Neutro claro
          200: '#eeeeee',
          300: '#e9e9e9',
          400: '#e2e2e2',
          500: '#E2E2E2', // Main neutral/background
          600: '#b6b6b6',
          700: '#888888',
          800: '#5b5b5b',
          900: '#2d2d2d',
        },
        muted: '#888888',
        white: '#ffffff',
        dark: {
          50: '#5b5b5b',
          100: '#2d2d2d',
          200: '#1A2A36',
          300: '#141d26',
          400: '#0e141a',
          500: '#070a0d',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, theme(colors.primary.500) 0%, theme(colors.primary.600) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, theme(colors.secondary.500) 0%, theme(colors.secondary.600) 100%)',
        // Actualizar gradiente hero con los nuevos colores base: Naranja (#FF8C00) y Verde Lima (#8BC34A)
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 140, 0, 0.9) 0%, rgba(255, 140, 0, 0.7) 50%, rgba(139, 195, 74, 0.8) 100%)',
      },
      borderRadius: {
        'xl': '1rem', // 16px
        '2xl': '1.5rem', // 24px - Para tarjetas grandes
      },
      boxShadow: {
        // Sombras más suaves y modernas, inspiradas en los dashboards
        // Actualizar sombras con los nuevos colores base: Naranja (#FF8C00) y Verde Lima (#8BC34A)
        'primary': '0 10px 30px rgba(255, 140, 0, 0.15)',
        'secondary': '0 10px 30px rgba(139, 195, 74, 0.15)',
        'card': '0 4px 15px rgba(0, 0, 0, 0.05)', // Sombra sutil para tarjetas
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)', // Sombra más pronunciada al hacer hover
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
      }
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'bounce-gentle': 'bounceGentle 2s infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      },
      bounceGentle: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' }
      }
    }
  },
  plugins: [],
};

export default config;