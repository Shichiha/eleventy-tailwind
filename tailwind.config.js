module.exports = {
  content: [
    './src/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        "figtree": "Figtree, san-serif",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
