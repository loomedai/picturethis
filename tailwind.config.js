/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gs-primary': '#35A94F',
        'gs-primary-trans': 'rgb(53, 169, 79, 0.6)'
      }
    },
  },
  plugins: [],
};