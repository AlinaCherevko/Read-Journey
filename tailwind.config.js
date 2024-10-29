/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "320px", max: "374.98px" },
        mobileAdaptive: "375px",
        tablet: "768px",
        desktop: "1440px",

        // Опціональні класи для більш специфічних умов
        mobileOnly: { max: "767.98px" },
        tabletOnly: { min: "768px", max: "1439.98px" },
        desktopOnly: { min: "1440px" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "2rem",
        },
      },
      padding: {
        42: "10.5rem",
      },
      colors: {
        "primary-white": "#f9f9f9",
        "main-text-color": "#686868",
        "main-border-color": "rgba(249, 249, 249, 0.2)",
        "primary-black": "#141414",
        "gray-bg-color": "#1F1F1F",
        "light-bg-color": "#262626",
        "dark-text-color": "rgba(227, 227, 227, 0.5)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      fontSize: {
        tiny: ["10px", "1.2"],
        lightSmall: ["12px", "1.33"],
        small: ["14px", "1.25"],
        medium: ["16px", "1.125"],
        lightMedium: ["20px", "1"],
        lightLarge: ["28px", "1.14"],
        large: ["32px", "1"],
        extraLarge: ["64px", "0.94"],
      },
      borderRadius: {
        lg: "30px",
        sm: "8px",
        md: "12px",
        full: "50%",
      },
    },
  },
  plugins: [],
};
