/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": "'Playfair Display', serif",
        "maven": "'Maven Pro', sans-serif"
      },
      spacing: {
        "9/10": "90%",
        "clamp-80": "clamp(20px, 5vw ,80px)",
        "clamp-50": "clamp(20px, 5vw ,50px)",
        "clamp-128": "clamp(50px, 13vw ,128px)",
      },
      colors: {
        "w-brown": "#b86339",
        "w-pink": "#fef2f0",
        "w-pink-dark": "#fdeae7",

      },
      borderWidth: {
        "1": "1px"
      },
      gridTemplateColumns: {
        "fill-250": "repeat(auto-fill, minmax(233px, 1fr))"
      },
      screens: {
        "laptop": { max: "1150px" },
        "lg": { max: "822px" },
        "md": { max: "768px" },
        'sm': { max: '639px' },
        "se": { max: "400px" }
      }
    },
  },
  plugins: [],
}
