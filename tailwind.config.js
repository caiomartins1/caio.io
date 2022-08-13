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
    },
  },
  plugins: [],
};
