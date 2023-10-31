/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        footer: "url('/src/assets/footerbg.png')",
      },
      fontFamily: {
        Roboto: "Roboto Slab",
        Merriweather: "Merriweather",
        Poppins: "Poppins",
        Lora: "Lora",
        Dancing: "Dancing Script",

        libre: "Libre Baskerville",
        Marck_Script: "Marck Script",
        Volkhov: "Volkhov",
        PT_Serif: "PT Serif",
        Niconne: "Niconne",
      },
      keyframes: {
        pingpong: {
          from: { transform: "translateY(20px)" },
          to: { transform: "translateY(-20px)" },
        },
      },
      animation: {
        pingpong: "pingpong 2s infinite ease-in-out alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
