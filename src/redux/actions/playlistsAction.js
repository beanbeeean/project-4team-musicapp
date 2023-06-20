import api from "../api";

function getPlaylists() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_REQUEST_SUCCESS" });
      const playlists = await api.get(`/browse/featured-playlists`, {
        params: {
          limit: 10,
        },
      });
      let randomNum =
        Math.floor(Math.random() * 10) == 9
          ? 0
          : Math.floor(Math.random() * 10);

      let data = playlists.data.playlists.items[randomNum];
      const selectedList = await api.get(`/playlists/${data.id}`);

      dispatch({
        type: "GET_PLAYLIST_SUCCESS",
        payload: { playlists: selectedList.data },
      });
    } catch (e) {
      dispatch({ type: "GET_PLAYLIST_FAILED" });
      console.log(e);
    }
  };
}
export const playlistsAction = { getPlaylists };
