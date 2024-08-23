/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ['point-100']: 'rgba(194, 245, 47,1)',
        ['basic-100']: 'rgba(37, 22, 26, 1)',
        ['basic-70']: 'rgba(37, 22, 26, 0.7)',
        ['basic-40']: 'rgba(37, 22, 26, 0.4)',
      },
    },
  },
  plugins: [],
};
