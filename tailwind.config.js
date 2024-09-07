/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marvelRed: "#ED1923",
      },
      boxShadow: {
        boxHeader: "rgb(38, 57, 77) 0px 10px 30px -10px",
      },
    },
  },
  plugins: [],
};
