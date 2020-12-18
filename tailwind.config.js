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
      xl: '18px',
    },
    boxShadow: {
      invert:
        '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
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
