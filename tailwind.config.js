const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,svg}', './public/index.html'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        },
        backgroundColor: {
            primary: "#fc5c04",
            secondary: "#3f37c9",
          },
        colors: {
            primary: "#fc5c04",
            secondary: "#3f37c9",
          },
        
    },
  },
  plugins: [
      
  ],
}