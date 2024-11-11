/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['"Inter"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "green" : "#c5f82a",
        "grey700" : "#333333",
        "grey800" : "#1f1f1f",
        "grey900" : "#141414",
      }
    },
  },
  plugins: [],
}