const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      white: '#ffffff',
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Inter UI', 'sans-serif'],
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
      base: '15px',
      lg: '16px',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
