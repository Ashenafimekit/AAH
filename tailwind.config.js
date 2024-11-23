/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        golden: "#E0B973",
        blueBlack: "#14274A",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1140px',
        'xl': '1280px',
      },
      textShadow: {
        small: "2px 1px 2px rgba(0, 0, 0, 0.5)", 
        default: "0 4px 4px rgba(0, 0, 0, 0.8)", 
        large: "0 8px 8px rgba(0, 0, 0, 0.8)", 
        custom: "0 4px 8px #00BCD4", 
        subtle: "0 1px 2px rgba(0, 0, 0, 0.5)", 
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
}

