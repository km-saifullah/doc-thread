/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1320px",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        primary: "#181818",
        secondary: "#222222",
        orangeColor: "rgba(247, 159, 35, 0.7)",
        yellowColor: "rgba(254, 237, 0, 0.8)",
        btnBg: "#F79F23",
        textColor: "rgba(24, 24, 24, 0.7)",
        navLink: "rgba(24, 24, 24, 0.8)",
      },
      dropShadow: {
        inputShadow: "0px 2px 4px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
