/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': 'Jouzu',
      'body': 'Inter',
    },
    extend: {
      colors: {
        'blue': {
          light: '#81bdd5',
          DEFAULT: '#002c50',
        },
        'aqua': '#70bac5',
        'cream': '#faebcb'
      }
    },
  },
  plugins: [],
}