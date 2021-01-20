const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  theme: {
    extend: {
      textColor: ['active'],
      colors: {
        blue: {
          '450': '#5F99F7'
        },
        red: {
          '450': '#fa243c'
        },
        yellow: {
          '150': 'FAF2E3'
        },
        green: {
          '1000': '22cc52'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
