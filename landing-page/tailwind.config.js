/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,  // container'i mərkəzləşdirir
        padding: '2rem', // İstədiyiniz paddingi tətbiq edə bilərsiniz
      },
    },
  },
  corePlugins: {
    container: true,
  },
  plugins: [],
};
