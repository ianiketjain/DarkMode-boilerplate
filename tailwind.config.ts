/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#000000",
          // Add more colors if needed for light mode :) i am showing example of 3 divs
          A_div_bg: "yellow",
          B_div_bg: "blue",
          C_div_bg: "green",
        },
        dark: {
          background: "#121212",
          text: "#ffffff",
          // Add more colors if needed for light mode :) i am showing example of 3 divs
          A_div_bg: "#42422a",
          B_div_bg: "#1d1d4c",
          C_div_bg: "#053a05",
        },
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "960px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  // plugins: [require("tailwind-scrollbar-hide")],
};
