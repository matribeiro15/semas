/** @type {import('tailwindcss').Config} */
var colors = require('tailwindcss/colors');
colors.cor_principal = colors.teal;
module.exports = {
  content: [
   "./pages/**/*.{js,ts,jsx,tsx}",
   "./components/**/*.{js,ts,jsx,tsx}",
 ],
  theme: {
    colors:colors,
    extend: {},
  },
  plugins: [],
}
