/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        surface: {
          DEFAULT: '#131316',
          elevated: '#1A1A1F',
          card: '#111114',
          subtle: '#17171B',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F5EC',
          200: '#F1E6D2',
          300: '#E4CFAB',
          400: '#D7B681',
          DEFAULT: '#C9A66B',
          500: '#C9A66B',
          600: '#B0884A',
          700: '#8C6834',
          800: '#6C4F29',
          900: '#4D371E',
          glow: 'rgba(201, 166, 107, 0.25)',
        },
        ivory: {
          DEFAULT: '#F5EFE6',
          muted: '#D8CFC4',
          dark: '#B0A89C',
        },
        luxury: {
          gray: '#9CA3AF',
          darkgray: '#71717A',
          border: 'rgba(201, 166, 107, 0.15)',
          borderHover: 'rgba(201, 166, 107, 0.45)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        arabic: ['Cairo', 'Amiri', 'sans-serif'],
      },
      borderRadius: {
        '16': '16px',
        '2xl': '16px',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(201, 166, 107, 0.12)',
        'gold-md': '0 0 25px rgba(201, 166, 107, 0.20)',
        'gold-lg': '0 0 45px rgba(201, 166, 107, 0.28)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, rgba(201,166,107,0.1) 0%, rgba(201,166,107,0) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
