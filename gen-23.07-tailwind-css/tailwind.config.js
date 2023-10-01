/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
    },
  },
  plugins: [],
};
