import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getItem } from "Utils/Storage";

const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      // if (!getItem("session-token")) {
      //   return (
      //     <Redirect
      //       to={{
      //         pathname: "/login"
      //       }}
      //     />
      //   );
      // } else {
      return <Component {...props} />;
      // }
    }}
  />
);

export default Private;
