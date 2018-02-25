import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./app/components/App";
import store from "./app/store.js";
import "bootstrap/dist/css/bootstrap.css";
import "./app/styles.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
