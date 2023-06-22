let initialState = {
  searchArtists: {},
  searchTracks: {},
  searchAlbums: {},
  loading: true,
};
function searchReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "SEARCH_REQUEST":
      return { ...state, loading: true };
    case "SEARCH_FAILED":
      return { ...state, loading: false };
    case "SEARCH_ARTISTS_SUCCESS":
      return { ...state, searchArtists: payload.searchArtists, loading: false };
    case "SEARCH_TRACKS_SUCCESS":
      return { ...state, searchTracks: payload.searchTracks, loading: false };
    case "SEARCH_ALBUMS_SUCCESS":
      return { ...state, searchAlbums: payload.searchAlbums, loading: false };
    default:
      return { ...state };
  }
}

export default searchReducer;
