/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      JostBold: ["JostBold", "sans-serif"],
      JostExtraBold: ["JostExtraBold", "sans-serif"],
      JostMedium: ["JostMedium", "sans-serif"],
    },
  },
  plugins: [],
}