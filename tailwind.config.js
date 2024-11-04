/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileAdaptive: { min: "375px" },
        tablet: "768px",
        desktop: "1440px",
      },
      padding: {
        42: "10.5rem",
        53.5: " 13.375rem",
      },
      margin: {
        18: "4.5rem",
        27: "6.75rem",
        36.5: "9.125rem",
      },
      colors: {
        "primary-white": "#f9f9f9",
        "main-text-color": "#686868",
        "main-border-color": "rgba(249, 249, 249, 0.2)",
        "primary-black": "#141414",
        "gray-bg-color": "#1F1F1F",
        "light-bg-color": "#262626",
        "dark-text-color": "rgba(227, 227, 227, 0.5)",
        "red-error-color": "#E90516",
        "green-success-color": "#30B94D",
      },
      backgroundImage: {
        iphoneMob: "url('/public/images/iphone-mob-1x.png')",
        iphoneDesktop: "url('/public/images/iphone-desktop-1x.png')",
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
        mediumSmall: ["18px", "1"],
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
