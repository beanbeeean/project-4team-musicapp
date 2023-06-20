let initialState = {
  artist: {},
  artistAlbums: {},
  artistTopTracks: {},
  artistRelated: {},
  albums: {},
  albumsTracks: {},
  loading: false,
};

function detailsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_REQUEST_SUCCESS":
      return { ...state, loading: true };
    case "GET_DETAIL_FAILED":
      return { ...state, loading: false };
    case "ARTIST_DETAIL_SUCCESS":
      return { ...state, artist: payload.artist, loading: false };
    case "ARTIST_ALBUMS_SUCCESS":
      return { ...state, artistAlbums: payload.artistAlbums, loading: false };
    case "ARTIST_TOPTRACKS_SUCCESS":
      return {
        ...state,
        artistTopTracks: payload.artistTopTracks,
        loading: false,
      };
    case "ARTIST_RELATED_SUCCESS":
      return { ...state, artistRelated: payload.artistRelated, loading: false };
    case "ALBUMS_DETAIL_SUCCESS":
      return { ...state, albums: payload.albums, loading: false };
    case "ALBUMS_TRACKS_SUCCESS":
      return { ...state, albumsTracks: payload.albumsTracks, loading: false };
    default:
      return { ...state };
  }
}

export default detailsReducer;
