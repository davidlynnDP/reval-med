/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F05A03',
        secondary: '#F57931',
        accent: '#EE3F00',
        light: '#FCFCFC',
      },
    },
  },
  plugins: [],
}