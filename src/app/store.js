import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { articleReducer as mainReducer } from "./reducers/articleReducer";

const reducers = {
  reducer: mainReducer,
  form: formReducer
};

const reducer = combineReducers(reducers);

export default createStore(reducer);