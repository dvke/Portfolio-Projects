/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#155EA7",
        "main-bg": "#0D1117",
        "column-bg": "#161C22",
      },
    },
  },
  plugins: [],
};
