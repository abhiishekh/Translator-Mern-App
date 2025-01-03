/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        abhi:['ImperialScript-Regular','sans-serif'],
        abhi2:['Calistoga-Regular', 'serif']
      }
    },
  },
  plugins: [],
}