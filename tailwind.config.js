module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
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
