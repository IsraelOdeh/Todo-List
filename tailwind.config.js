/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "cLBrightBlue": "hsl(220, 98%, 61%)",
        "cLFrom":"hsl(192, 100%, 67%)",
        "cLto": "hsl(280, 87%, 65%)",

        "cLVeryLightGray": "hsl(0, 0%, 98%)",
        "cLVeryLightGrayishBlue": "hsl(236, 33%, 92%)",
        "cLLightGrayishBlue": "hsl(233, 11%, 84%)",
        "cLDarkGrayishBlue": "hsl(236, 9%, 61%)",
        "cLVeryDarkGrayishBlue": "hsl(235, 19%, 35%)",

        // ### Dark Theme

        "cDVeryDarkBlue": "hsl(235, 21%, 11%)",
        "cDVeryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
        "cDLightGrayishBlue": "hsl(234, 39%, 85%)",
        "cDLightGrayishBlue (hover)": "hsl(236, 33%, 92%)",
        "cDDarkGrayishBlue": "hsl(234, 11%, 52%)",
        "cDVeryDarkGrayishBlue": "hsl(233, 14%, 35%)",
        "cDVeryDarkGrayishBlue": "hsl(237, 14%, 26%)"
      },

      fontFamily:{
        'josesan' : ["'Josefin Sans' ","sans-serif"]
      }
    },
  },
  darkMode:"class",
  plugins: [],
}

