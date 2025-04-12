/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        skyLight: "#C3E9FF",
        skyDark: "#025F96",
        Warm: "#F6F6F6",
        Green: "#90C67C",
      },
    },
  },
  plugins: [],
};
