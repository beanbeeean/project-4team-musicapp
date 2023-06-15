import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
  search: searchReducer,
  home: homeReducer,
});
