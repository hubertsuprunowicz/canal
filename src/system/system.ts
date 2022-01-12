import { createStitches, ScaleValue } from "@stitches/react";

const elevation = {
  root: 99999,
  dialog: 40,
  navigation: 20,
  overlay: 30,
  drawer: 16,
  tooltip: 12,
  tableHeader: 4,
  containedButton: 2,
  containedField: 2,
  decoration: 1,
};

export type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "background"
  | "error"
  | "warn";

export const { styled, theme, css, globalCss, createTheme } = createStitches({
  media: {
    bp1: "(min-width: 768px)",
  },
  theme: {
    space: {
      0: "0px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
      6: "32px",
      7: "48px",
      8: "56px",
      9: "64px",
      10: "96px",
      11: "128px",
    },
    radii: {
      0: "0px",
      1: "5px",
      2: "10px",
      3: "21px",
      4: "48px",
      round: "50%",
    },
    zIndices: elevation,
    fonts: {
      lato: "Lato, sans-serif",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
      4: "24px",
      5: "30px",
      6: "50px",
    },
    fontWeights: { 400: 400, 700: 700 },
    colors: {
      background50: "#FFFFFF",
      primary100: "#FEF0E1",
      primary200: "#FEDDC4",
      primary300: "#FDC5A6",
      primary400: "#FBAE8F",
      primary500: "#F9896B",
      primary600: "#D6604E",
      primary700: "#B33D35",
      primary800: "#902223",
      primary900: "#77141C",

      secondary100: "#E7E1F9",
      secondary200: "#D0C4F4",
      secondary300: "#AC9CDE",
      secondary400: "#8778BE",
      secondary500: "#594B94",
      secondary600: "#43367F",
      secondary700: "#30256A",
      secondary800: "#201755",
      secondary900: "#140E47",

      success100: "#D7DAFA",
      success200: "#B1B6F6",
      success300: "#858BE4",
      success400: "#6066C9",
      success500: "#3339A6",
      success600: "#252A8E",
      success700: "#191D77",
      success800: "#101360",
      success900: "#090B4F",

      background100: "#F8F8FD",
      background200: "#EAEAF7",
      background300: "#DDDDEB",
      background400: "#CCCCDE",
      background500: "#B4B4CC",
      background600: "#9090B8",
      background700: "#63639A",
      background800: "#3F3F7C",
      background900: "#262667",

      warn100: "#FFF4D1",
      warn200: "#FFE5A4",
      warn300: "#FFD376",
      warn400: "#FFC154",
      warn500: "#FFA41C",
      warn600: "#DB8314",
      warn700: "#B7650E",
      warn800: "#934B08",
      warn900: "#7A3805",

      error100: "#FEE4D0",
      error200: "#FDC3A2",
      error300: "#FA9A73",
      error400: "#F6724F",
      error500: "#F03418",
      error600: "#CE1B11",
      error700: "#AC0C10",
      error800: "#8B0715",
      error900: "#730419",
    },
  },
  utils: {
    p: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: ScaleValue<"space">) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<"space">) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<"space">) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    background100: "#F8F8FD",
    background200: "#EEEEFB",
    background300: "#E1E1F0",
    background400: "#D3D3E5",
    background500: "#B4B4CC",
    background600: "#9090B8",
    background700: "#63639A",
    background800: "#3F3F7C",
    background900: "#262667",
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {},
});

export const globalStyles = globalCss({
  html: {
    overflowX: "hidden",
    boxSizing: "border-box",
  },
  "*, *::before, *::after": {
    boxSizing: "inherit",
  },
  "#root": {
    height: "100vh",
  },
  "span, button, h1, h2, h3, h4, h5, h6, p, div": {
    fontFamily: "$lato",
  },
  body: {
    fontFamily: "$lato",
    height: "100vh",
    margin: 0,
  },
});
