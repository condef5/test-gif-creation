/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/config.ts'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#292F3C',
          green: '#04c976',
          secondary: '#ff5722',
        },
      },
      fontFamily: {
        'priory-san': ['PrioriSans', 'system-ui', '-apple-system'],
      },
    },
  },
  plugins: [],
}
