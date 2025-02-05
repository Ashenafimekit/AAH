/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#deae54",
        blueBlack: "#14274A",
        tealGreen: "#0d2026",
      },
      screens: {
        sm: "640px",
        md: "780px",
        lg: "1024px",
        xl: "1280px",
      },
      textShadow: {
        small: "2px 1px 2px rgba(0, 0, 0, 0.5)",
        default: "0 4px 4px rgba(0, 0, 0, 0.8)",
        large: "0 8px 8px rgba(0, 0, 0, 0.8)",
        custom: "0 4px 8px #00BCD4",
        subtle: "0 1px 2px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 2s ease-out",
        slideInRight: "slideInRight 2s ease-out",
        slideInTop: "slideInTop 2s ease-out",
        slideInBottom: "slideInBottom 2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadows = theme("textShadow");

      const textShadowUtilities = Object.entries(textShadows).reduce(
        (acc, [key, value]) => {
          acc[`.text-shadow-${key}`] = { textShadow: value };
          return acc;
        },
        {}
      );

      addUtilities(textShadowUtilities, ["responsive"]);
    },
  ],
};
