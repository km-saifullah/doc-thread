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
      },
    },
  },
  plugins: [],
};
