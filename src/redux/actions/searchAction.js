import api from "../api";

function searchByKeyword(keyword) {
  return async (dispatch) => {
    const artists = await api.get("/search", {
      params: {
        q: keyword,
        type: "artist",
        limit: 20,
      },
    });
    const tracks = await api.get("/search", {
      params: {
        q: keyword,
        type: "track",
        limit: 20,
      },
    });
    const albums = await api.get("/search", {
      params: {
        q: keyword,
        type: "album",
        limit: 20,
      },
    });

    console.log("artist : ", artists.data.artists.items);
    console.log("tracks : ", tracks.data.tracks.items);
    console.log("albums : ", albums.data.albums.items);
    dispatch({
      type: "SEARCH_ARTISTS_SUCCESS",
      payload: { searchArtists: artists.data.artists.items },
    });
    dispatch({
      type: "SEARCH_TRACKS_SUCCESS",
      payload: { searchTracks: tracks.data.tracks.items },
    });
    dispatch({
      type: "SEARCH_ALBUMS_SUCCESS",
      payload: { searchAlbums: albums.data.albums.items },
    });
  };
}

export const searchAction = { searchByKeyword };
