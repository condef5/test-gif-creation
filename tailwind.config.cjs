/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#04c976',
        secondary: '#ff5722',
      },
    },
  },
  plugins: [],
}
