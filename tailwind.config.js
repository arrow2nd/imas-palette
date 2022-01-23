module.exports = {
  content: ['./pages/**/*.tsx', './components/**/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px'
    },
    extend: {
      fontFamily: {
        default: ['"M PLUS Rounded 1c"', 'sans-serif']
      },
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c',
        imas: '#FF74B8'
      }
    }
  },
  plugins: [require('@tailwindcss/custom-forms')]
}
