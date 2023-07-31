/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-blue': '#5570f1',
      'primary-blue-50': '#97a5eb',
      'primary-blue-trans': '#eef0fa',

      'secondary-gold': '#ffcc91',
      'secondary-gold-20': '#fef5ea',
      white: '#fff',

      black: '#33343a',
      'black-10': '#bec0ca',
      'black-20': '#a6a8b1',
      'black-60': '#45464e',

      'action-red': '#cc5f5f',
      'red-trans': '#f57e771f',

      'action-green': '#519c66',
      'green-trans': '#32936f1f',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
