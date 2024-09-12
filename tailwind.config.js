/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marvelRed: "#ED1923",
      },

      boxShadow: {
        boxHeader:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        boxFooter:
          "rgba(0, 0, 0, 0.3) 0px -19px 38px, rgba(0, 0, 0, 0.22) 0px -15px 12px",
      },

      textShadow: {
        whiteOutline:
          "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
        blackOutline:
          "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
      },

      fontFamily: {
        marvel: ['"Marvel"', "sans-serif"],
        luckiestGuy: ['"Luckiest Guy"', "cursive"],
        bangers: ['"Bangers"', "system-ui"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-white-outline": {
          textShadow:
            "2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff",
        },
        ".text-shadow-black-outline": {
          textShadow:
            "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
        },
        ".text-shadow-red-outline": {
          textShadow:
            "2px 0 #ED1923, -2px 0 #ED1923, 0 2px #ED1923, 0 -2px #ED1923, 1px 1px #ED1923, -1px -1px #ED1923, 1px -1px #ED1923, -1px 1px #ED1923",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke": "10px black",
        },
        ".text-stroke-black-thin": {
          "-webkit-text-stroke": "5px black",
        },
        ".text-stroke-black-extra-thin": {
          "-webkit-text-stroke": "3px black",
        },
      });
    },
  ],
};
