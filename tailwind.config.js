/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      height: {
        '100-208': 'calc(100vh - 208px)',
      }
    },
  },
  plugins: [],
}
