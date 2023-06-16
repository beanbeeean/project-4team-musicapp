import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import chartsReducer from "./chartsReducer";

export default combineReducers({
  search: searchReducer,
  home: homeReducer,
  charts: chartsReducer,
});
