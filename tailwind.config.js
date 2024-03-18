module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Your Handwritten Font"', "cursive"],
      },
      colors: {
        corkboard: {
          light: "#EADFC9", // Light color resembling cork
          medium: "#C8B486", // Medium color resembling cork
          dark: "#A88B5A", // Dark color resembling cork
          pin: "#FF5640", // Color for pins or sticky notes
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
