/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colour: {
          red: "#E13F1C",
          slate: "#565454",
          shadow: "#727573",
          white: "#FFFFFF",
          grey: "#9B9695",
          bluishGrey: "#b2cceb",
          darkBluishGrey: "#87a4c7",
        },
      },
      backgroundImage: {
        library: "url('/library-bg.jpg')",
      },
    },
  },
  plugins: [],
};
