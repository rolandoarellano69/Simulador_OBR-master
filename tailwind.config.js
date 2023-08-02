const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
});