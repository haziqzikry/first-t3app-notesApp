/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // @ts-ignore
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
