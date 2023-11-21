/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": {
            100: "#FCE7F3",
            200: "#F0D8E2",
            300: "#B22A65",
            400: "#AA0F52",
            },
        "secondary": "#EAEAFA",
        "light": "#F4F4F5",
        "dark": {
          100: "#414147",
          200: "#232225",
          300: "#282227",
          400: "#171719",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

