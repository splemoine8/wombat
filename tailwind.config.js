/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
      adios: ['Adios Script Pro Regular','sans-serif'],
      futureMedium: ['Futura Std Medium', 'serif']
    }
  },
  },
  plugins: [],
}
