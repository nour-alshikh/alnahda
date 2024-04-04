/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'cairo': ['Cairo', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/hero.gif')",
      },
      colors: {
        'ice-white': 'rgba(255, 255, 255, 0.38)',
        'main': '#294199',
        'secondary': '#D9D9D9C9',
      },
      aspectRatio: {
        '1/1.2': '1/1.2',
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

