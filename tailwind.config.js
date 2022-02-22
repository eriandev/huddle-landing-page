const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.mono],
        opensans: ['Open Sans', ...fontFamily.sans],
      },
      fontSize: {
        '2xs': '.55rem',
      },
      colors: {
        'strong-pink': 'hsl(322, 100%, 66%)',

        'pale-cyan': 'hsl(193, 100%, 96%)',
        'dark-cyan': 'hsl(192, 100%, 9%)',

        'grayish-blue': 'hsl(208, 11%, 55%)'
      },
      borderRadius: {
        'xl': '1rem'
      }
    },
  },
}