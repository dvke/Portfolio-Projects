/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Dancing Script", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "960px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
