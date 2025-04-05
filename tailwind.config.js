/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          dark: '#121212',
          light: '#f1f1f1',
          accent: '#4ADE80', 
        },
      },
    },
    plugins: [],
  }
  