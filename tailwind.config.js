/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jjk: ["jujutsu-kaisen", "sans-serif"],
        jetbrains: ["jetbrains-mono", "monospace"],
        comic: ["wild-words", "sans-serif"],
      },
    },
  },
  plugins: [],
};
