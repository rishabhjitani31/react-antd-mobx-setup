import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Private from "./Hoc/Private";
const loader = () => {
  return null;
};

// components
// const Login = Loadable({
//   loader: () => import("Containers/Login/Login"),
//   loading: () => loader
// });

const NotFoundPage = Loadable({
  loader: () => import("Components/NotFoundPage/NotFoundPage"),
  loading: () => loader
});

const Dashboard = Loadable({
  loader: () => import("Containers/Dashboard"),
  loading: () => loader
});

const AppLayout = Loadable({
  loader: () => import("Containers/AppLayout/AppLayout"),
  loading: () => loader
});

const Datasheet = Loadable({
  loader: () => import("Containers/DataSheet"),
  loading: () => loader
});

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/login" component={Login} /> */}
      <Private component={AppLayout} />
    </Switch>
  );
};

export const ContentRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/datasheet" component={Datasheet} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};
export default Routes;
