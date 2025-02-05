/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        siteBg: "hsl(148, 38%, 91%)",
        submit: "hsl(169, 82%, 27%)",
        warning: "hsl(0, 66%, 54%)",
        title: "hsl(187, 24%, 22%)",
        otherText: "hsl(186, 15%, 59%)",
      },

      fontFamily: {
        karla: ["Karla", "sans-serif"], // Add the font with a fallback
      },
    },
  },
  plugins: [],
};
