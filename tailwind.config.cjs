/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      "sans-serif": ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
