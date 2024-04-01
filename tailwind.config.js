/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/asset 15.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      shadow: {
        "box":" inset 35px 35px 69px #929292 inset -35px -35px 69px #ffffff",
      }
    },
  },
  plugins: [],
};
