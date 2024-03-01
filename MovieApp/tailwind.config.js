/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gold': '#FFD700',
        'brown': '#421e15',
        'dark-purple': '#20081c',
        'Bgc': '#041844fa',
        'charcoal-black': '#04184498',
        'hex-background': '#b0bbc52c',
        'light': '#ffffff'
      },
      height:{
        'height': '120vh',
        'image-height': '350px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}