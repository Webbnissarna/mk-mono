import { Theme } from "theme-ui";

const theme: Theme = {
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
  },

  shadows: {
    heading: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    link: "2px 2px 2px rgba(0, 0, 0, 0.25)",
  },
};

export default theme;
