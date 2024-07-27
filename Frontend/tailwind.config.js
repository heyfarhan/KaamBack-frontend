/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

