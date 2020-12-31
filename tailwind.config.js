const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      white: '#ffffff',
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Inter UI', 'sans-serif'],
    },
    fontSize: {
      '2xs': '12px',
      xs: '13px',
      sm: '14px',
      base: '15px',
      lg: '16px',
      xl: '18px',
    },
    extend: {
      zIndex: {
        '-10': '-10',
        1: '1',
      },
      boxShadow: {
        invert:
          '0 -1px 3px -0px rgba(0, 0, 0, 0.1), 0 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
