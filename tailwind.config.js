/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/template/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        // Example: 'primary': '#your-color',
      },
      fontFamily: {
        // Add custom fonts here
      },
    },
  },
  plugins: [],
  // To prevent conflicts with Bootstrap, you can disable preflight
  // corePlugins: {
  //   preflight: false,
  // },
}

