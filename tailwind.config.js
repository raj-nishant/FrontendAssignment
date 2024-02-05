/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 5.661764621734619px 14.154411315917969px 0px rgba(0, 0, 0, 0.21)",
      },
    },
  },
  plugins: [],
};
