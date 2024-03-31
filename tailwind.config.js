/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem', 
        'xxxs': '0.4rem',// Define the 'xxs' text size
      },
      boxShadow: {
        custom: '0 4px 6px rgba(184, 184, 210, 0.1), 0 1px 3px rgba(184, 184, 210, 0.08)',
      },
      fontFamily: {
        poppins: ['sans-serif'],
      },
    },
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ],
};
