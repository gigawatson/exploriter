/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './**/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'averia': ['"Averia Serif Libre"', ...defaultTheme.fontFamily.serif],
        'ibmplex': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        'vollkorn': ['"Vollkorn"', ...defaultTheme.fontFamily.serif],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
        'spacegrotesk': ['"Space Grotesk"', ...defaultTheme.fontFamily.mono],
        'ebgaramond': ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
        'pirataone': ['"Pirata One"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}

