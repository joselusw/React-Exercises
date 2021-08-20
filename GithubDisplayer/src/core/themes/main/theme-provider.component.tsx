import * as React from "react";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import { MainTheme } from "./theme";

export const MainThemeProviderComponent: React.FC = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
