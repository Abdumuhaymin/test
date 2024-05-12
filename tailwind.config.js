/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1400px",
        },
      },
      colors: {
        primary: "#0129E3",
        darkGrey: "#747474",
        footerBG: "#050B2B",
        footerBr: "#1E2441",
        lightGray: "#F8F8F8",
        Wisteria: "#98B0F5",
        Rockman: "#379FF2",
        Wiston: "#fafafa",
      },
    },
  },
  plugins: [],
};
