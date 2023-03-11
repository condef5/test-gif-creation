/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
        'priory-san': ['PrioriSan', 'system-ui', '-apple-system'],
      },
    },
  },
  plugins: [],
}
