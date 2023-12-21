/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js"],
  theme: {
    extend: {
      fontFamily:{
        
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "FAEED1",
          "gg": "#000000"
        },
      },
    ],
  },
  
}

