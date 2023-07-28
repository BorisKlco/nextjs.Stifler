/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        wwhite: "#F2F2F2",
        wfill: "#D9D9D9",
        wbar: "#4158D9",
        wbg: "#2B45D9",
        wstroke: "#A7B2F2",
      },
    },
  },
  plugins: [],
};
