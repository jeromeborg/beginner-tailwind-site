// CUSTOMIZED COLOR
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.jsx", "./src/**/*.js", "./src/**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        teal: colors.teal,
        orange: colors.orange
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
