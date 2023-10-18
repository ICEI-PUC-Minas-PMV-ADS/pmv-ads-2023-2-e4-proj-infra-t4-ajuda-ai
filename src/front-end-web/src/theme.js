import { createTheme as createThemeMUI } from "@mui/material/styles";

const customTheme = {
  palette: {
    primary: {
      main: "#3f51b4",
      light: "#757de8",
      dark: "#002984",
    },
    secondary: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
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
    borderRadius: 8,
  },
};

const createTheme = (theme) => createThemeMUI(theme || customTheme);

export { customTheme, createTheme };
