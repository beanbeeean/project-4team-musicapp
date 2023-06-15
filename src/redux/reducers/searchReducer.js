let initialState = {
  searchArtists: {},
  searchTracks: {},
  searchAlbums: {},
};
function searchreducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "SEARCH_ARTISTS_SUCCESS":
      return { ...state, searchArtists: payload.searchArtists };
    case "SEARCH_TRACKS_SUCCESS":
      return { ...state, searchTracks: payload.searchTracks };
    case "SEARCH_ALBUMS_SUCCESS":
      return { ...state, searchAlbums: payload.searchAlbums };
    default:
      return { ...state };
  }
}

export default searchreducer;
