/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBlue: "#0079FF",
        gray2: "#697C9A",
        lightGray: "#4B6A9B",
        darkGray: "#2B3442",
        whiteGray: "#F6F8FF",
        white2: "#FFFFFF",
        darkGrayBlack: "#141D2F",
      },
      fontSize: {
        h1: "2.6rem",
        h2: "2.2rem",
        h3: "1.6rem",
        h4: "1.3rem",
        h5: "1.1rem",
      },
      lineHeight: {
        h1: "3.8rem",
        h2: "3.3rem",
        h3: "2.4rem",
        h4: "2rem",
      },
      fontWeight: {
        reg: "500",
        bold: "700",
      },
      spacing: {
        84: "84px",
        46: "46px",
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },

  screens: {
    md: "900px",
  },

  // boxShadow: {
  //   custom: "0px 10px 18px -1px rgba(0,0,0,0.75)",
  // },

  plugins: [
    function ({ addBase, theme, addComponents }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.h1"),
          lineHeight: theme("lineHeight.h1"),
          fontWeight: theme("fontWeight.bold"),
        },
        h2: {
          fontSize: theme("fontSize.h2"),
          lineHeight: theme("lineHeight.h2"),
          fontWeight: theme("fontWeight.bold"),
        },
        h3: {
          fontSize: theme("fontSize.h3"),
          lineHeight: theme("lineHeight.h3"),
          fontWeight: theme("fontWeight.reg"),
        },
        h4: {
          fontSize: theme("fontSize.h4"),
          lineHeight: theme("lineHeight.h4"),
          fontWeight: theme("fontWeight.reg"),
        },
        h5: {
          fontSize: theme("fontSize.h5"),
        },
      });

      const newComponents = {
        ".search-btn": {
          width: theme("spacing.84"),
          height: theme("spacing.46"),
          backgroundColor: theme("colors.lightBlue"),
          color: theme("colors.white2"),
          textAlign: "center",
          fontSize: "1.4rem",
          fontWeight: "700",
          borderRadius: "1rem",
        },
      };
      addComponents(newComponents);
    },
  ],
};
