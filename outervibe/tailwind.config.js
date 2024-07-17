/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-one': "url('./assets/kyoto.jpg')",
        'carousel-two': "url('./assets/Montreal2.jpg')",
        'carousel-three': "url('./assets/montreal3.jpg')",
      },
    },
  },
  plugins: [
  
  ],
}