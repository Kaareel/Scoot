/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        'boxAccordion' : '0 0 0 .25rem rgba(13, 110, 253, .25)',
      },
      colors: {
        customOrange: '#fcb72b', textPrimary: '#939caa',textSecondary:'#495567', colorThird: '#333a44', bgAside: '#495567', accordionColor: '#f2f5f9', titleAccordionColor: '#212529',
      },
    },
  },
  plugins: [],
}

