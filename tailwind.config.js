/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        "786p": "1366px",
        "1024p": "1440px",
        "1189p":"1440px",
        '2xl': '1536px',  
        '4k': '2560px', 
      },
      colors: {
        mainColor: "rgb(169, 144, 245)",
        themeGray: "rgb(241, 245, 249)",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(180deg, #A990F5 0%, #493096 100%)",
      },
      fontFamily: {
        alfa: ['"Alfa Slab One"', "cursive"],
        switzer: ['"Switzer"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"], // Added Manrope
      },
    },
  },
  plugins: [],
};
