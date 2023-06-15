import { combineReducers } from "redux";
import searchreducer from "./searchReducer";

export default combineReducers({
  search: searchreducer,
});
