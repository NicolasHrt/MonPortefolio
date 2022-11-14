/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],

      },
      colors: {
        primary: "#080459 ",
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
            transform : "translateX(50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            transform : "translateX(50%)"
          },
        },
      },
      boxShadow: {
        primary: "rgb(99 99 99 / 20%) 0px 2px 15px 0px",
        secondary: "rgb(0 0 0 / 35%) 0px 5px 15px",
      },
      maxWidth: {
        primary: "1500px",
        secondary : "1300px"
      },
    },
  },
  plugins: [],
};
