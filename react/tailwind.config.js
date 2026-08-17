/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pm-yellow":  "#FFCC00",
        "pm-red":     "#CC1A0F",
        "pm-orange":  "#FF8C00",
        "pm-blue":    "#7DD8EE",
        "pm-dark":    "#0A0A0F",
        "pm-darkred": "#1A0000",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
