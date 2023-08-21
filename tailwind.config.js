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
          text: '#FFFFFF'
        },
        light: {
          elem: '#FFFFFF',
          bg: '#FAFAFA',
          text: '#111517'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
