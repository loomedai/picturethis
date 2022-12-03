/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gs-primary': '#35A94F',
        'gs-primary-trans': 'rgb(53, 169, 79, 0.6)',
        'cate-all': 'ff3a21',
        'cate-water': '0c96dc',
        'cate-land': '56c02a',
        'cate-econ': '8f1838',
        'cate-gender': 'ff3a21',
      }
    },
  },
  plugins: [],
};