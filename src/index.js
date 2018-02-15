import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles.css";
import { reducer } from "./reducers";

let store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
