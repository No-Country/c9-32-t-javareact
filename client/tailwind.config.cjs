/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customViolet: '#2463EB'
      },
      fontFamily:{
          roboto: "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}
