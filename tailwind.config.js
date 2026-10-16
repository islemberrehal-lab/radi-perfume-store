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
        background: 'var(--bg-primary)',
        surface: {
          DEFAULT: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          card: 'var(--bg-card)',
          subtle: 'var(--bg-secondary)',
        },
        gold: {
          50: 'var(--text-primary)',
          100: 'var(--text-primary)',
          200: 'var(--text-primary)',
          300: 'var(--accent)',
          400: 'var(--accent-hover)',
          DEFAULT: 'var(--accent)',
          500: 'var(--accent)',
          600: 'var(--accent-hover)',
          700: 'var(--accent)',
          800: 'var(--accent)',
          900: 'var(--accent)',
          glow: 'var(--accent-glow)',
        },
        ivory: {
          DEFAULT: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          dark: 'var(--text-muted)',
        },
        luxury: {
          gray: 'var(--text-secondary)',
          darkgray: 'var(--text-muted)',
          border: 'var(--border-subtle)',
          borderHover: 'var(--border-hover)',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', '"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['var(--font-serif)', '"Playfair Display"', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        arabic: ['Cairo', 'Amiri', 'sans-serif'],
      },
      borderRadius: {
        '16': '16px',
        '2xl': '16px',
      },
      boxShadow: {
        'gold-sm': '0 0 15px var(--accent-glow)',
        'gold-md': '0 0 25px var(--accent-glow)',
        'gold-lg': '0 0 45px var(--accent-glow)',
        'glass': 'var(--shadow-card)',
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
