import React from "react";
import { Route, Switch } from "react-router-dom";
import { Movies } from "app/movies/Movies";
import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Movies} />
    </Switch>
  );
};
