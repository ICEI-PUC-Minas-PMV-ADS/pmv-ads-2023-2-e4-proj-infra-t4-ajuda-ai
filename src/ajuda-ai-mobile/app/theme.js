import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3f51b4",
    onPrimary: "#ffffff",
    primaryContainer: "#757de8",
    onPrimaryContainer: "#002984",
    secondary: "#f44336",
    onSecondary: "#ffffff",
    secondaryContainer: "#ff7961",
    onSecondaryContainer: "#ba000d",
    background: "#f2f4f7",
    // outline: "#ba000d",
  },
};
