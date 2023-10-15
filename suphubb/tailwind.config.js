/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#f7f7f7",
        darkgray: "#efefef",
        darkestgray: "#1c2127",
        rating: "#9fe4a7",
        primary: "#f2cb1f",
        secondary: "#da5454",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "960px",
    },
  },
  plugins: [],
};
