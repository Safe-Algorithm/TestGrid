/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0867FF",
        "blue-shadow": "#3E00FF",
        "blue-description": "#3080FF",
        skyblue: "#0867FF33",
        skyblue2: "#0867FF12",
        skyblue3: "#0867FF26",

        green: "#C1FF00",
        darkgreen: "#A4D900",
        lightgreen1: "#C1FF0012",
        lightgreen2: "#C1FF0026",

        black: "#2a2a2a",
        white: "#ffffff",

        warning: "#FF6F6F",
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
      borderRadius: {
        default: "5px",
      },
      fontSize: {},
    },
  },
};
