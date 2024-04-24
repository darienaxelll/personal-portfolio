/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ['"Familjen Grotesk"', "sans-serif"],
        nameTitle: ['"Zen Tokyo Zoo"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
