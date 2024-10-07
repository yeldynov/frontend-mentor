/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        "8xl": "1440px", // Custom breakpoint for larger screens
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        youngserif: ["young-serif", "sans-serif"],
        inter: ["inter", "sans-serif"],
        worksans: ["work-sans", "sans-serif"],
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        josefinsans: ["Josefin Sans", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        barlowcondensed: ["Barlow Condensed", "sans-serif"],
        dmserif: ["DM Serif Display", "serif"],
        dmsans: ['"DM Sans"', "sans-serif"],
        karla: ["Karla", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        commissioner: ["Commissioner", "sans-serif"],
        baijam: ["Bai Jamjuree", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "dark-gray": "#8C8C8C",
        "darker-gray": "#6B6B6B",
        "strong-cyan": "#26baa4",
        "light-blue": "#6073ff",
        "dark-grayish-blue": "#4b545c",
        "grayish-blue": "#9eabb1",

        "huddle-pink": "#ff1a8c",
        "huddle-grayish-blue": "#7e99ab",
        "huddle-pale-cyan": "#e2ffff",
        "huddle-dark-cyan": "#001f27",

        bentoPurple: {
          light: "hsl(254, 88%, 90%)", // Purple 100
          DEFAULT: "hsl(256, 67%, 59%)", // Purple 500
        },
        bentoYellow: {
          light: "hsl(31, 66%, 93%)", // Yellow 100
          DEFAULT: "hsl(39, 100%, 71%)", // Yellow 500
        },
        bentoWhite: "hsl(0, 0%, 100%)", // White
        bentoBlack: "hsl(0, 0%, 7%)", // Black
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
