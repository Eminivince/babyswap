/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroswap: "url('/src/images/stormbg.jpg')",
      },
    },
  },
  plugins: [],
};
