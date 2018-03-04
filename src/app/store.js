import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { articleReducer as mainReducer } from "./reducers/articleReducer";
import { searchReducer } from "./reducers/searchReducer";

const reducers = {
  reducer: mainReducer,
  form: formReducer,
  search: searchReducer
};

const reducer = combineReducers(reducers);

export default createStore(reducer);