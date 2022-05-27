module.exports = {
  important: true,
  // mode: 'jit',
  purge: ["./src/**/*.js", "./src/**/**/*.js"],
  darkMode: "class",
  theme: {
    right: {
      md: "-10px",
    },
    translate: {
      "4/5": "109%",
      "1/2": "18%",
      sm: "14%",
      center: "-50%",
    },
    rounded: {
      "5xl": "5rem",
    },
    fontSize: {
      "4/5": "80%",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      transparent: "transparent",
      bgBody: "#1f1f38",
      bgBodyVar: "#2c2c6c",
      primary: "#4db5ff",
      primaryVar: "rgba(77, 181, 255, 0.4)",
      TextWhite: "#fff",
      light: "rgba(255, 255, 255, 0.6)",
      nav: "rgba(0, 0, 0, 0.3)",
    },
    extend: {
      width: {
        container: "75%",
        "container-md": "80%",
        "container-sm": "90%",
        102: "28rem",
      },
      height: {
        "height-img": "70rem",
        "height-img-md": "60em",
        "height-img-sm": "50em",
      },
      transform: {
        "translate-x-50%": "-50%",
      },

      fontFamily: {
        body: ["Poppins"],
      },
      container: {},
    },
  },
  variants: {
    extend: {},
  },
};
