/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem', 
        'xxxs': '0.4rem',// Define the 'xxs' text size
      },
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}

