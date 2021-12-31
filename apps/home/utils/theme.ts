import { Theme } from "theme-ui";

const makeTheme = <T extends Theme>(t: T) => t;

const theme = makeTheme({
  fonts: {
    body: "'Nunito', sans-serif;",
    heading: "'Raleway', sans-serif;",
    monospace: "'Fira Code', monospace;",
  },
  fontSizes: {
    small: 12,
    body: 14,
    medium: 24,
    title: 48,
    heading: 96,
  },
  lineHeights: {
    nav: "38px",
  },
  fontWeights: {
    heading: 900,
    title: 700,
    body: 400,
    stylish: 300,
  },
  space: [0, 2, 5, 10, 20],
  radii: [0, 2, 5],

  colors: {
    background: "#1e1e1e",
    banner: "#fff",
    body: "#fff",
    lightHover: "rgba(255, 255, 255, 0.2)",
    card: "rgba(17, 17, 17, 0.9)",
  },

  shadows: {
    heading: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    link: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    title: "2px 4px 2px rgba(0, 0, 0, 0.5);",
    box: "2px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

export default theme;

export type CustomThemeType = typeof theme;
