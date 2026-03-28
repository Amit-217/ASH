/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engineering: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          800: '#1e40af', // Deep engineering blue
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}
