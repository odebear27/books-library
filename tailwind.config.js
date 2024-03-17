/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colour: {
          red: "#E13F1C",
          slate: "#565454",
          shadow: "#CCC9C8",
          white: "#FFFFFF",
          grey: "#9B9695",
        },
      },
    },
  },
  plugins: [],
};
