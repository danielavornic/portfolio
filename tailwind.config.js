/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
      maxWidth: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1e1e2e",
      },
      boxShadow: {
        btn: "2px 2px 0px 0 #b4befe",
        menu: "-10px 0px 30px -15px #14032666",
        header: "0 10px 30px -10px #14032666",
      },
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
};
