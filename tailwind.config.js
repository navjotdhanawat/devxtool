/* eslint-disable global-require */
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        },
        mytheme: {
          // primary: '#8be9fd',
          // 'primary-100': '#282a36',
          // secondary: '#9ae8ed',
          // accent: '#c7ed76',
          // neutral: '#28323E',
          // 'base-100': '#282a36',
          // info: '#40A1DD',
          // success: '#1F988E',
          // warning: '#E0AD06',
          // error: '#F86A5D',

          primary: '#661AE6',
          'primary-content': '#ffffff',
          secondary: '#D926AA',
          'secondary-content': '#ffffff',
          accent: '#1FB2A5',
          'accent-content': '#ffffff',
          neutral: '#191D24',
          'neutral-focus': '#111318',
          'neutral-content': '#A6ADBB',
          'base-100': '#2A303C',
          'base-200': '#242933',
          'base-300': '#20252E',
          'base-content': '#A6ADBB',
        },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'wireframe',
    ],
  },
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
