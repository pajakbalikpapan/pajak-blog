const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      textColor: ['active']
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
