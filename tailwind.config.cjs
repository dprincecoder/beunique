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
        home_hero: "url('../public/page_imgs/main_hero.png')",
        home_hero2: "url('../public/page_imgs/main_hero2.png')",
        home_hero3: "url('../public/page_imgs/main_hero3.png')",
        home_hero4a: "url('../public/page_imgs/main_hero4a.png')",
        home_hero4b: "url('../public/page_imgs/main_hero4b.png')",
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
