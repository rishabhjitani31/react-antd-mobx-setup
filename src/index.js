import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router-dom";
import Stores from "./Store";
import Routes from "./routes";
import { toJS } from "mobx";
import history from "./history";
import "./index.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider {...Stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "development") {
  window.console = (function(oldCons) {
    return {
      log: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.log(...newArgs);
      },
      info: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.info(...newArgs);
      },
      warn: function(...args) {
        const newArgs = args.map(param => {
          return oldCons.warn(param);
        });
        oldCons.log(...newArgs);
      },
      error: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.error(...newArgs);
      },
      table: function(...args) {
        const newArgs = args.map(param => {
          return toJS(param);
        });
        oldCons.table(...newArgs);
      }
    };
  })(window.console);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
