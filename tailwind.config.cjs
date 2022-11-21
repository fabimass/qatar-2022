/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      backgroundImage: {
        'qatar-ecuador': "url('/img/1.png')",
        'senegal-netherlands': "url('/img/3.png')",
      }
    }
  },
  plugins: [],
}
