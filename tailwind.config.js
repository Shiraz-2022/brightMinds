/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkBrown: "#693C27",
      lightBrown: "#FEE9D4",
      mediumLightBrown: "#CDAE82",
      mediumDarkBrown: "#D9D9D9",
      white: "#ffffff",
      gold: "#D59120",
      black: "#000000",
    },
    fontFamily: {
      odBold: ["ODBold"],
      odRegular: ["ODRegular"],
    },
  },
  plugins: [],
};
