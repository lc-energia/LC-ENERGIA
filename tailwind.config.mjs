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
          50: '#edf5d2',
          100: '#daeaa6',
          200: '#c8e079',
          300: '#b5d54d',
          400: '#9bbd2d',
          500: '#9BBD2D', // Main brand color
          600: '#7d9824',
          700: '#5e721b',
          800: '#3e4c12',
          900: '#1f2609',
        },
        secondary: {
          50: '#fdebd1',
          100: '#fbd6a3',
          200: '#f9c276',
          300: '#f6ae48',
          400: '#f49918',
          500: '#F49918', // Secondary/CTA color
          600: '#cf7d0a',
          700: '#9b5d07',
          800: '#673e05',
          900: '#341f02',
        },
        neutral: {
          50: '#f9f9f9',
          100: '#f4f4f4',
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
        'gradient-hero': 'linear-gradient(135deg, rgba(155, 189, 45, 0.9) 0%, rgba(155, 189, 45, 0.7) 50%, rgba(244, 153, 24, 0.8) 100%)',
      },
      boxShadow: {
        'primary': '0 8px 32px rgba(155, 189, 45, 0.18)',
        'secondary': '0 8px 32px rgba(244, 153, 24, 0.18)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'soft': '0 2px 12px rgba(0, 0, 0, 0.06)',
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