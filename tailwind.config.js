/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-mm': { 'max': '940px' }, // max-width breakpoint
        'max-sm': { 'max': '640px' }, // max-width breakpoint
        'smallest': {'max': '340px'}
      },
    },
  },
  plugins: [],
}

