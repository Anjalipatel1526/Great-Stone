/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50:  "#F7F4F0",
          200: "#E8E0D8",
          500: "#8C7B6B",
          700: "#3D3530",
          900: "#1A1714",
        },
        cream:  "#FAF8F5",
        gold:   "#C9A96E",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body:    ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px", // Override to sharp
      },
    },
  },
  plugins: [],
}
