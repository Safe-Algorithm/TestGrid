/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0867FF",
        green: "#C1FF00",
        "blue-shadow": "#3E00FF",
        "blue-description": "#3080FF",
      },
      borderWidth: {
        32: "32px",
      },
      boxShadow: {
        custom: "6px 6px 0 0px var(--tw-shadow-color)",
        "custom-features": "4px 4px 0 0px var(--tw-shadow-color)",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};