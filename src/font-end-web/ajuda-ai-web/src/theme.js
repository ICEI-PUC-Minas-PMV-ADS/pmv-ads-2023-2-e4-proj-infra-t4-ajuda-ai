import { createTheme as createThemeMUI } from "@mui/material/styles";

const customTheme = {
  palette: {
    primary: {
      main: "#3446ba",
      light: "#3a4ec4",
      dark: "#2131a2",
    },
    secondary: {
      main: "#FFC848",
      light: "#ffde4f",
      dark: "#fcb140",
    },
    background: {
      default: "#f2f4f7",
      paper: "#ffffff",
    },
    text: {
      primary: "#303742",
      secondary: "#767f8d",
      disabled: "#A6AEBA",
    },
  },
  shape: {
    borderRadius: 10,
  },
};

const createTheme = (theme) => createThemeMUI(theme || customTheme);

export { customTheme, createTheme };
