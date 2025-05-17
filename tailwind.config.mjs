export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "/index.html",
    "./src/**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#657786",
        neutral: "#AAB8C2",
        "base-100": "#FFFFFF",
        info: "#1E90FF",
        success: "#28A745",
        warning: "#FFC107",
        error: "#DC3545",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },  
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
  darkMode: "class",

};
