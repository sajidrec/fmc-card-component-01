/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        "desktop": "481px"
      },
      colors: {
        "custom-Dark-cyan": "hsl(158, 36%, 37%)",
        "custom-Cream": "hsl(30, 38%, 92%)",
        "custom-Very-dark-blue": "hsl(212, 21%, 14%)",
        "custom-Dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        Montserrat: ["Montserrat","sans-serif"],
        Fraunces: ["Fraunces", "serif"]
      }
    },
  },
  plugins: [],
}

