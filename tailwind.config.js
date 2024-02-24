/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'jeykll': {
          '69': '#660292',
        },
      },
    },
  },
  plugins: [],
}

