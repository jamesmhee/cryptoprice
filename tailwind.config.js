/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          elem: '#222831',
          bg: '#222831',
          text: '#FFFFFF',
          red: '#30475E',
          navy: '#30475E'
        },
        light: {
          elem: '#FFFFFF',
          bg: '#FAFAFA',
          text: '#111517',
          red: '#F05454',
          navy: '#30475E'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
