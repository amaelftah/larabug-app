const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './resources/views/**/*.blade.php',
    './resources/assets/js/frontend/**/*.js',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      primary: {
        100: '#fbe9ee',
        200: '#f4c9d4',
        300: '#eda8b9',
        400: '#e06785',
        500: '#d22651',
        600: '#bd2249',
        700: '#7e1731',
        800: '#5f1124',
        900: '#3f0b18',
      },
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d',
      },
      orange: {
        100: '#fef2eb',
        200: '#fcdece',
        300: '#f9c9b0',
        400: '#f5a175',
        500: '#f1793a',
        600: '#d96d34',
        700: '#914923',
        800: '#6c361a',
        900: '#482411',
      },
      green: {
        100: '#ebf9eb',
        200: '#cdefcd',
        300: '#aee5af',
        400: '#72d274',
        500: '#35be38',
        600: '#30ab32',
        700: '#207222',
        800: '#185619',
        900: '#103911',
      },
      blue: {
        50: '#ebf5ff',
        100: '#e1effe',
        200: '#c3ddfd',
        300: '#a4cafe',
        400: '#76a9fa',
        500: '#3f83f8',
        600: '#1c64f2',
        700: '#1a56db',
        800: '#1e429f',
        900: '#233876',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'Cerebri Sans', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#D22651',
              'text-decoration': 'none',
              'font-weight': 600,
              '&:hover': { color: '#BD2249' },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
