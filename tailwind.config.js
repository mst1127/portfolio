/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        enSansSemi: ['var(--font-enSansSemi)', ...fontFamily.sans],
        laBelleAurore:['var(--font-laBelleAurore)', ...fontFamily.sans],
      },
      colors:{
        dark: "#343A40",
        light: "#E1E8EB",
        primary: "#7952B3", // rgb(121, 82, 179) purple
        primaryDark: "#FFC107", // rgb(255, 193, 7) yellow
      }
    },
  },
  plugins: [],
}

