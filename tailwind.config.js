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
        // Blush, ivory & wine — semantic aliases (forest/gold/sage) keep existing class names working
        forest: '#5c2438',
        gold: '#c9959e',
        'gold-dark': '#a67580',
        obsidian: '#2b1f24',
        sage: '#f7f1ed',
        burgundy: {
          cream: '#f7f1ed',
          tan: '#c9959e',
          wine: '#5c2438',
          dark: '#4a1d2d',
        },
        wedding: {
          50: '#fdf8f9',
          100: '#f5e8eb',
          200: '#e8ccd2',
          300: '#d4a5b0',
          400: '#b87a8a',
          500: '#5c2438',
          600: '#4e1e30',
          700: '#3f1828',
          800: '#331420',
          900: '#2a111b',
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
