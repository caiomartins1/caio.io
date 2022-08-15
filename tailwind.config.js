/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cta-blue': {
          300: '#0070F3',
        },
        'brand-grey': {
          300: '#666',
        },
      },
      keyframes: {
        fadeInToRight: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInToBottom: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInToRight: 'fadeInToRight 2s',
        fadeInToBottom: 'fadeInToBottom 0.8s',
      },
    },
  },
  plugins: [],
};
