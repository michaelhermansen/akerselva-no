/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Everett", "Helvetica", "Arial", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
    },
    lineHeight: {
      small: "1.3",
      normal: "1.4",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      gray: {
        light: "#FAFAFA",
        medium: "#232323",
      },
      black: "#000000",
      yellow: "#F7BB34",
    },
    borderRadius: {
      none: "0",
      xs: "0.75rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.875rem",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
