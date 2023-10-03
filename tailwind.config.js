/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#404258',
          secondary: '#474E68',
          third: '#50577A',
          fourth: '#6B728E',
        },
        light: {
          primary: '#EFFFFD',
          secondary: '#B8FFF9',
          third: '#85F4FF',
          fourth: '#42C2FF',
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
