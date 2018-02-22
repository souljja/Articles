import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./styles.css";
import { reducer as formReducer } from "redux-form";
import { reducer as mainReducer } from "./reducers";

const reducers = {
  reducer: mainReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
