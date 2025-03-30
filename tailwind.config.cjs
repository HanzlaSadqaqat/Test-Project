/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary: "#FFCE22",
        primary_hover: "#FFD84D",
      },
    },
    devServer: {
      historyApiFallback: {
        disableDotRule: true,
      },
    },
  },
  plugins: [],
};
