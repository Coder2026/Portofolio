/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-500/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

