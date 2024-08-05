/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");
const svgToDataUri = require("mini-svg-data-uri");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        primary1: "#010316",
        primary2: "#02042F",
        primary3: "#041242",
        primary4: "#193A7F",
        primary5: "#1C3E86",
        neutral1: "#FFFFFF",
        neutral2: "#F6F6F6",
        neutral3: "#EDEDED",
        neutral4: "#DFDFDF",
        neutral5: "#C9C9C9",
        neutral6: "#9C9C9C",
        neutral7: "#A8A8A8",
        neutral8: "#868686",
        neutral9: "#000000e6",
        neutral10: "#000000",
      },
      spacing: {
        "20vh": "20vh",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
    fontFamily: {
      unbounded: "Unbounded",
      dmsans: "DM Sans",
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.6xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.7xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.5xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.6xl"),
          },
        },
        h3: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.5xl"),
          },
        },
        h4: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.4xl"),
          },
        },
        h5: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.3xl"),
          },
        },
        h6: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.semibold"),
          [`@media (min-width: ${theme("screens.md")})`]: {
            fontSize: theme("fontSize.2xl"),
          },
        },
      });
    }),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
module.exports = config;
