/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "bottom-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
            filter: "blur(5px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        "fade-in": "bottom-fade-in 0.5s linear 1",
      },
    },
  },
  plugins: [],
};
