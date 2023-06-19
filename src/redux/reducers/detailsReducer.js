let initialState = {
  artist: {},
  artistAlbums: {},
  artistTopTracks: {},
  artistRelated: {},
  albums: {},
  albumsTracks: {},
};

function detailsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "ARTIST_DETAIL_SUCCESS":
      return { ...state, artist: payload.artist };
    case "ARTIST_ALBUMS_SUCCESS":
      return { ...state, artistAlbums: payload.artistAlbums };
    case "ARTIST_TOPTRACKS_SUCCESS":
      return { ...state, artistTopTracks: payload.artistTopTracks };
    case "ARTIST_RELATED_SUCCESS":
      return { ...state, artistRelated: payload.artistRelated };
    case "ALBUMS_DETAIL_SUCCESS":
      return { ...state, albums: payload.albums };
    case "ALBUMS_TRACKS_SUCCESS":
      return { ...state, albumsTracks: payload.albumsTracks };
    default:
      return { ...state };
  }
}

export default detailsReducer;
