import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainThemeProviderComponent } from "./core/themes/main/theme-provider.component";
import { ListScene } from "./scenes/list.scene";
import { StylesProvider } from "@material-ui/core/styles";

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <MainThemeProviderComponent>
        <Router>
          <Switch>
            <Route exact path="/">
              <ListScene />
            </Route>
            <Route path="/detail/:id"></Route>
          </Switch>
        </Router>
      </MainThemeProviderComponent>
    </StylesProvider>
  );
};
