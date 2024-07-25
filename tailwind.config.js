/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(calc(-100% - 4px))' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'slideinleft': 'slide-in-left 1s ease-out forwards',
        'slideinright': 'slide-in-right 1s ease-out forwards',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      keyframes: {
        fill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        fill: 'fill 5s ease-out forwards',
      },
      boxShadow: {
        'covered': '-0px -0px 7px 4px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'greenfont':'#07FF07',
        'buttonRed':'#CF040E',

      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        shine: 'shine 1s ease-in-out infinite',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dsdigital': ['DS-Digital', 'sans-serif'],

      },
      height:{
        '95vh':'91vh',
        '90vh':'88vh'
      },
      screens:{
        'sm': {'max':'700px'},
        'xs': {'max':'366px'},
        'md': {'max':'1100px'},
      },
    },
  },
  plugins: [],
};
