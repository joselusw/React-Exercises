import merge from "lodash/merge";
import { createTheme } from "@material-ui/core";
import { Theme } from "@material-ui/core";

const defaultTheme = createTheme();

export const MainTheme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      light: "#4a8089",
      main: "#1a535c",
      dark: "#002a33",
    },
    secondary: {
      light: "#fff584",
      main: "#d6c254",
      dark: "#a29223",
    },
    success: {
      main: "#43a047",
    },
    info: {
      main: "#1976d2",
    },
    warning: {
      main: "#ffa000",
    },
    table: {
      row: {
        main: "#ddd",
      },
    },
  },
});
