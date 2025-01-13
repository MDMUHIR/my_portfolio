/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: "scrollbar-width: none; -ms-overflow-style: none;", // Hide for Firefox and IE
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      // jdajdjak
      colors: {
        "darken-primary": "#252B37",
        primary: "#151823",
        colorA: "#0fffc1",
        colorB: "#7e0fff",
      },
      animation: {
        textColor: "textColor 10s ease infinite",
        animateGlow: "animateGlow 10s ease infinite",
      },
      keyframes: {
        textColor: {
          "0%, 100%": { color: "#7e0fff" },
          "50%": { color: "#0fffc1" },
        },
        animateGlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
