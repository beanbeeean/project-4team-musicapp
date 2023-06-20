let initialState = {
  loading: false,
  playlists: {},
};

function playlistsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_REQUEST_SUCCESS":
      return { ...state, loading: true };
    case "GET_PLAYLIST_FAILED":
      return { ...state, loading: false };
    case "GET_PLAYLIST_SUCCESS":
      return { ...state, playlists: payload.playlists, loading: false };
    default:
      return { ...state };
  }
}

export default playlistsReducer;
