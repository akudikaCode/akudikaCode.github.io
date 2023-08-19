/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
