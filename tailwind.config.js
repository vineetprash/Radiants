/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#3498db",
            secondary: "#f1c40f",
            accent1: "#0b3142",
            accent2: "#0E3C51",
            accent3: "#5e4b56",
            danger1: "#db504a",
            danger2: "#FA4943",
         },
         fontFamily: {
            inter: ["Inter", "sans-serif"],
         },
      },
   },
   plugins: [],
};
