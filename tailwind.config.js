const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circuit-board': "url('/assets/images/circuit-board.svg')",
      },
      fontFamily: {
        mono: ['Josefin Slab', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
