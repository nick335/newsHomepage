/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryHighlightColor: 'hsl(35, 77%, 62%)',
        secondaryHighlightColor: 'hsl(5, 85%, 63%)',
        primaryBgColor: 'hsl(36, 100%, 99%)',
        primaryHeaderColor: 'hsl(240, 100%, 5%)',
        primaryTextColor: 'hsl(233, 8%, 79%)',
        secondaryTextColor: 'hsl(236, 13%, 42%)',
        modalBgColor: 'rgba(0,0,25,0.4)'
      },
      keyframes: {
        comeout: {
          '0%' : { right: '-70%' },
          '100%' : { right: '0%' }
        },
        goout: {
          '0%' : { right: '0%' },
          '100%' : { right: '-70%' }
        },
       }
    },
  },
  plugins: [],
}
