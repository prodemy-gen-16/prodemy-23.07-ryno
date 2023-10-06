/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#f8f8f8",
          200: "#c2c2c2",
          300: "#696969",
          400: "#454545",
          500: "#292929",
        },
      },
      backgroundImage: {
        hero: "url('./src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
