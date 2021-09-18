module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "b-email": "hsl(217, 28%, 15%)",
        "b-mail": "hsl(218, 28%, 13%)",
        "b-footer": "hsl(216, 53%, 9%)",
        "b-testimonials": "hsl(219, 30%, 18%)",

        "g-call-cyan": "hsl(176, 68%, 64%)",
        "g-call-blue": "hsl(198, 60%, 50%)",
        "light-error": "hsl(0, 100%, 63%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
