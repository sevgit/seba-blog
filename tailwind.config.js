/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: "#003566",
        darkBlue: "#001D3D",
        darkerBlue: "#000814",
        gold: "#FFD60A",
        darkGold: "#FFC300",
      },
    },
  },
  plugins: [],
};
