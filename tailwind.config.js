/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09ccd0",
        secondary: "#ff6f69",
      },
    },
  },
  plugins: [require("daisyui")],
};
