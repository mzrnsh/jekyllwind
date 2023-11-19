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
        vintagePrimary: '#c9ae92',
        vintagePrimaryDarker: '#b59c7a',
        vintagePrimaryDarkerStill: '#a39470',
        vintageSecondary: '#7e2f1a',
        vintageBackground: '#f5f5f5',
      },
      fontFamily: {
        vintage: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
