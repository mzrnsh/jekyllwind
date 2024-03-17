module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        title: '#7e2f1a',
        subtitle: '#8a331c',
        thirdTitle: '#8c5841',
        classicText: '#8f7c66',
        classicBackground: '#f5f5f5',
      },
      fontFamily: {
        classic: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
