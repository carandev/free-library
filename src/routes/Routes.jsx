import React from 'react';
import {Route, Switch} from "wouter";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
     <Route path="/" component={Home} />
      <Route path="/book/:id">Libro</Route>
    </Switch>
  );
};

export default Routes;
