module.exports = {
  mode: "jit",
  purge: [
    "./dev/app/**/*.twig",
    "./dev/app/**/*.php",
    "./dev/assets/js/**/*.js"
  ],
  safelist: [], //https://tailwindcss.com/docs/content-configuration#safelisting-classes
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#444444",
        },
        primary: {
          DEFAULT: "#C60F1F", // 42
          hover: "#8e0b16" // 30
        },
        secondary: {
          DEFAULT: "#39B54A", // 47
          hover: "#25742f" // 30
        }
      },
      borderColor: theme => ({
        DEFAULT: theme("colors.gray.300")
      }),
      ringColor: theme => ({
        DEFAULT: theme("colors.gray.200")
      }),
      container: theme => ({
        center: true,
        padding: {
          DEFAULT: theme("spacing.5"),
          sm: theme("spacing.6"),
          md: theme("spacing[7.5]")
        },
        screens: {
          ...theme("screens"),
          "2xl": theme("screens.xl"),
          "3xl": theme("screens.xl")
        }
      }),
      minWidth: theme => ({
        ...theme("width")
      }),
      maxWidth: theme => ({
        ...theme("width")
      }),
      minHeight: theme => ({
        ...theme("height")
      }),
      maxHeight: theme => ({
        ...theme("height")
      }),
      screens: {
        xs: "375px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1260px",
        "2xl": "1440px",
        "3xl": "1600px",
        print: { raw: "print" }
      },
      backdropBlur: {
        DEFAULT: "10px"
      },
      fontFamily: {
        sans: ["sans-serif"]
      },
      fontSize: {
        "40px": "40px",
        "38px": "38px",
        "30px": "30px",
        "25px": "25px",
        "22px": "22px",
        "20px": "20px",
        "18px": "18px",
        "16px": "16px",
        "15px": "15px",
        "14px": "14px",
        "12px": "12px"
      },
      lineHeight: {
        none: "1",
        tight: "1.15",
        snug: "1.25",
        normal: "1.35",
        relaxed: "1.66",
        loose: "2" // can be changed
      },
      transitionProperty: {
        border: "border-color",
        background: "background-color",
        modal: "transform, opacity",
        underline: "text-decoration, text-underline-offset"
      },
      zIndex: {
        navbar: 1000,
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        backdrop: 1050,
        modal: 1055,
        popover: 1070,
        tooltip: 1080,
        toast: 1090
      }
    }
  },
  plugins: [
    ({ matchUtilities, theme }) => {
      matchUtilities(
        {
          ratio: value => ({
            "&::before": {
              display: "block",
              content: "var(--tw-content)",
              paddingTop: value === "auto" ? 0 : `calc(100% / (${value}))`
            }
          })
        },
        { values: theme("aspectRatio") }
      );

      matchUtilities(
        {
          gx: value => ({
            "--tw-gx": value
          }),
          gy: value => ({
            "--tw-gy": value
          }),
          g: value => ({
            "--tw-gy": value,
            "--tw-gx": value
          })
        },
        { values: theme("spacing") }
      );
    },

    ({ addVariant }) => {
      addVariant("validated-invalid", ".validated &:invalid");
      addVariant(
        "peer-validated-invalid",
        ".validated :merge(.peer):invalid ~ &"
      );
    }
  ]
};
