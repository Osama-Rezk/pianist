import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { Home } from "../src/pages/home";
import { Login } from "../src/pages/login";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home/:id?">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Redirect from="/" to="/home" />

        <Route component={() => <div>Route not found 404</div>} />
      </Switch>
    </BrowserRouter>
  );
};
