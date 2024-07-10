/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#041893",
          200: "#FDD513",
          300: "#1F82E8",
          400: "#D9D9D9",
          500: "#181B38",
          600: "#3F4358",
          700: "#F4F6FE",
          800: "#4351E8",
        },
      },
      fontFamily: {
        'ptSans': ["PT Sans", "sans-serif"],
      },
      backgroundImage: {
        'custom-image1': "url('./assets/tech.jpg')",
        'custom-image2': "url('./assets/business.jpg')",
        'custom-image3': "url('./assets/account.jpg')",
        'custom-image4': "url('./assets/Engg.jpg')",
        'custom-image5': "url('./assets/marketing.jpg')",
        'homeBg': "url('./assets/Homebg.png')",
      },
    },
  },
  plugins: [],
}

