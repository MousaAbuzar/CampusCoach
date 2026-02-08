/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // optional, if you ever use /pages
  ],
  theme: {
    extend: {
      colors: {
        uofa: {
          green: "#007C41",
          dark: "#053B28",
          gold: "#FFC72C",
          surface: "#FAF8F2",
        },
      },
    },
  },
  plugins: [],
};
