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
        classicPrimary: '#c9ae92',
        classicPrimaryDarker: '#b59c7a',
        classicPrimaryDarkerStill: '#a39470',
        classicPrimaryDarkest: '#8f7c66',
        classicSecondary: '#7e2f1a',
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
