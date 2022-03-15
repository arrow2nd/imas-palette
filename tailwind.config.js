module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        default: ['"M PLUS Rounded 1c"', 'sans-serif']
      },
      colors: {
        'natural-white': '#faf8f7',
        'natural-gray': '#515151',
        'natural-black': '#1c1c1c',
        imas: '#FF74B8'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
