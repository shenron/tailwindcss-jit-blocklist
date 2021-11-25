module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.tsx',
    ],
    options: {
       blocklist: ['border'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
