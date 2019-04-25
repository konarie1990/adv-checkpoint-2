import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import CatDetails from "./components/CatDetails";
import NotFound from "./components/NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cats/:id" component={CatDetails} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
