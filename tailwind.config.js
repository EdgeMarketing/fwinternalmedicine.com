/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.{vue,js,ts}',
    './app/pages/**/*.{vue,js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        dblue: '#30464C', // Dark Blue
        mblue: '#46616F', // Medium Blue
        lgray: '#A2A8AE', // Light Gray
        lblue: '#87B4B7', // Light Blue
        burntorange: '#B65B33', // Burnt Orange
        tan: '#BDA86A', // Tan
        cream: '#D9D0C4', // Cream
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
        serif: ['Rokkitt', 'serif'],
      },
    },
  },
  plugins: [],
}