module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      default: ['"M PLUS Rounded 1c"', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px'
    },
    extend: {
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
