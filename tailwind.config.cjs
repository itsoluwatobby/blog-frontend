/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mad': {'max': '768px'},
      'nest-hub': {'min': '768px', 'max': '1024px'},
      'small': {'max': '480px'},
      'md': '900px',
      'min-lag': '768px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
