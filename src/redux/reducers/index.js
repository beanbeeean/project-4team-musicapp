import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import chartsReducer from "./chartsReducer";
import detailsReducer from "./detailsReducer";
import playlistsReducer from "./playlistsReducer";

export default combineReducers({
  search: searchReducer,
  home: homeReducer,
  charts: chartsReducer,
  details: detailsReducer,
  playlists: playlistsReducer,
});
