/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        poppins : ['Poppins', 'sans-serif'],
        montserrat:['Montserrat']
      },
      letterSpacing:{
        widest: '.5em'
      }
    },
  },
  plugins: [],
}

