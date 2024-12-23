/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto Condensed"],
      barlow: ["Barlow"],
      quattrocento: ["Quattrocento"],
      satisfy: ["Satisfy"],
      londrina: ["Londrina Solid"],
    },
    extend: {
      colors: {
        yellow: "#FDC913",
        "light-gray": "#FDC913",
        "dark-gray": "#292929",
        red: "#CE2829",
        beige: "#FAF7F2",
      },
    },
  },
  plugins: [],
};