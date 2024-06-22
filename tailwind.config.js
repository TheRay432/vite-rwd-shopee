/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fb5830",
        lightOrange: "#f97160",
        secondary: "rgba(251, 88, 48, 0.6)",
      },
      boxShadow: {
        boxOrange: "0 0 1px 5px rgba(251, 88, 48, 0.3)",
        card: "0 0.5rem 1rem rgba(0, 0, 0, 0.25)",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
