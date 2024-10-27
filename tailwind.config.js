/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include .ts and .tsx if you're using TypeScript
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'], // Add the custom font family here
      },
    },
  },
  plugins: [],
}
