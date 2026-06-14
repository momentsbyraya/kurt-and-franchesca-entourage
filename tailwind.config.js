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
        // Primary = rustic brown / coffee (forest/gold/sage names preserved for existing classes)
        forest: '#6f4e37',
        gold: '#c9ad8e',
        'gold-dark': '#5b4636',
        obsidian: '#3b2f2a',
        sage: '#f5efe6',
        burgundy: {
          cream: '#f5efe6',
          tan: '#d9c2a6',
          wine: '#6f4e37',
          dark: '#4a3728',
        },
        wedding: {
          50: '#faf6f0',
          100: '#f3ebdd',
          200: '#e4d3bd',
          300: '#d9c2a6',
          400: '#c4a484',
          500: '#8a6a4f',
          600: '#6f4e37',
          700: '#5b4636',
          800: '#4a3728',
          900: '#3b2f2a',
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
