import constants from "./src/constants.json";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brandingSans: ["Manrope", "sans-serif"],
        brandingSerif: ["Playfair Display", "serif"],
      },
      colors: constants.colors,
    },
  },
  plugins: [],
};
