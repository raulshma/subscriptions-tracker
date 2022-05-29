export default {
  important: true,
  colors: {
    purple: {
      50: '#E0E4FF',
      100: '#BDC4FF',
      200: '#7A8AFF',
      300: '#3D54FF',
      400: '#001DFA',
      500: '#0015B7',
      600: '#001194',
      700: '#000D70',
      800: '#000847',
      900: '#000424',
    },
  },
  plugins: [],
  theme: {
    extend: {},
  },
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'media', // or 'media' or 'class'
};
