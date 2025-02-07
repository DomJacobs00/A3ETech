/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.phtml", // If your templates are inside a "views" folder
    "./*.phtml",           // If there are .phtml files in the root directory
    "./public/**/*.phtml"  // If you keep templates inside "public"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


