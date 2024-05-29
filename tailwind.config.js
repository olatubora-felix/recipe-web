/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#509E2F',
          main: '#84BD00',
          light: '#C4D600',
        },
        secondary: {
          DEFAULT: '#DC582A',
          main: '#F6784C',
        },
        gray: {
          light: '#253D4E',
        },
      },
    },
  },
  plugins: [],
};
