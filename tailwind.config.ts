/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'credit-types': "url('/src/assets/creditcard_sprite.png')"
        },
        fontFamily: {
            atm: 'ATM'
        }
      },
      colors: {
        primary: '#9b85ad',
        neutral: {
            0: '#e1e1d6',
            1: '#D4D4CE',
            2: '#B9B9B9',
            3: '#909090',
        },
        white: '#f1f0e7',
        blue: {
            1: '#73ABCF',
            2: '#126cae'
        }
      }
    },
    plugins: [],
  }