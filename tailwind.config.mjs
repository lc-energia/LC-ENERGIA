/** @type {import('tailwindcss').Config} */
const config = {
    content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        // Brand Colors - Semantic naming
        primary: {
          50: '#fff7e6',
          100: '#ffe9bf',
          200: '#ffd680',
          300: '#ffc340',
          400: '#ffac00',
          500: '#FF8C00', // Main brand color (Naranja Vibrante)
          600: '#e67e00',
          700: '#cc6f00',
          800: '#b36000',
          900: '#995100',
        },
        secondary: {
          50: '#f0f7e6',
          100: '#e0efbf',
          200: '#cce080',
          300: '#b3d14a',
          400: '#99c34a',
          500: '#8BC34A', // Secondary/CTA color (Verde Lima)
          600: '#7db042',
          700: '#6e9c3a',
          800: '#5f8932',
          900: '#50752a',
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