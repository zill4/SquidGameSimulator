module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '15468px'
     },
     extend: {
      colors: {
        'squid-cyan': '#119699',
        'squid-pink': '#DE6EAA',
        'squid-yellow': '#D0DC82',
        'squid-red': '#B51142'
      }
    }
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }