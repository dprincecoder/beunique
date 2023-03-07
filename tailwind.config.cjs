const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        anybody: ["Anybody", ...fontFamily.sans],
      },

      backgroundImage: {
        home_hero: "url('/new-assets/Main_header.webp')",
        home_hero2: "url('/new-assets/body_1.webp')",
        home_hero3: "url('/new-assets/body_2.webp')",
        home_hero4a: "url('/new-assets/body_3A.webp')",
        home_hero4b: "url('/new-assets/body_3B.webp')",
      },

      screens: {
        sm: "480px",
        sm2: "580px",
        sm3: "640px",
        md: "768px",
        md2: "870px",
        md3: "960px",
        lg: "1080px",
        lg2: "1200px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tw-elements/dist/plugin"),
  ],
};
