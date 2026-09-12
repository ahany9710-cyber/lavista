/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        lavista: {
          ink: '#161616',
          sand: '#BDA588',
          'sand-deep': '#7A5C3A',
          bronze: '#BC986B',
          navy: '#00163A',
          cream: '#F5F1EA',
        },
      },
    },
  },
  plugins: [],
}
