/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#136dec",
        "primary-hover": "#0f5bbd",
        "background-light": "#f6f7f8",
        "background-dark": "#101822",
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "surface-dark": "#1c2430",
        "text-secondary": "#9da8b9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
