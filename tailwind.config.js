/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          accent: '#CCFF00',
          darker: '#0A0A0A',
          dark: '#161616',
          light: '#A3A3A3',
        }
      }
    },
  },
  plugins: [],
}