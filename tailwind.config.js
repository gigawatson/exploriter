/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'selector',
  content: [
    './**/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'averia': ['"Averia Serif Libre"', ...defaultTheme.fontFamily.serif],
        'ibmplex': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        'vollkorn': ['"Vollkorn"', ...defaultTheme.fontFamily.serif],
        'lexend': ['"Lexend"', ...defaultTheme.fontFamily.sans],
        'pirataone': ['"Pirata One"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

