/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "400px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
      },
      animation: {
        float: "float 3s  infinite",
      },
      keyframes: {
        float: {
          "0,100%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(2%)",
          },
        },
      },
    },
  },
  plugins: [],
};
