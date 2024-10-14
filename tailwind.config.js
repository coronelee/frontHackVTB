/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      kanitBold: ["KanitBold", "sans-serif"],
      kanitExtraBold: ["KanitExtraBold", "sans-serif"],
      kanitMedium: ["KanitMedium", "sans-serif"],
    },
  },
  plugins: [],
}