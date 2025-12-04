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
        brandBlue1: '#124671',
        brandBlue2: '#0077a4',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Rokkitt', 'serif'],
      },
    },
  },
  plugins: [],
}