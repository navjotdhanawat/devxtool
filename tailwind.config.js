const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: 'media',
  theme: {
    extend: {
      scale: {
        100: '1',
        101: '1.01',
      },
      colors: {
        sidebar: '#f0ebe730',
      },
      rotate: {
        270: '270deg',
      },
      minWidth: {
        180: '180px',
      },
    },
  },
  plugins: [daisyui],
};
