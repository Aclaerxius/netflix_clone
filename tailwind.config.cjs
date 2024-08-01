/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "sans-serif": ["Roboto", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideRight: "slideRight 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
