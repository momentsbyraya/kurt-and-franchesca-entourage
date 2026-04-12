/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': '992px',
      },
      colors: {
        // Primary = blush pink (forest/gold/sage names preserved for existing classes)
        forest: '#b86e7e',
        gold: '#e8b4c2',
        'gold-dark': '#a86b7d',
        obsidian: '#4a3e41',
        sage: '#f7f1ed',
        burgundy: {
          cream: '#f7f1ed',
          tan: '#e8b8c4',
          wine: '#6d3d48',
          dark: '#5c2f3a',
        },
        wedding: {
          50: '#fdf6f8',
          100: '#fcecf0',
          200: '#f5d0da',
          300: '#e8b4c2',
          400: '#d996a8',
          500: '#b86e7e',
          600: '#a86b7a',
          700: '#8f5a67',
          800: '#6d4450',
          900: '#4a2e36',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Great Vibes', 'cursive'],
        'antsvalley': ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
