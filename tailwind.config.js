/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        gradientAnimation: 'gradientAnimation 2s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // Start off from the right
          '100%': { transform: 'translateX(-100%)' }, // End off to the left
        },
      },
    },
  },
  plugins: [],
};
