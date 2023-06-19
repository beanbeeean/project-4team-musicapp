import api from "../api";

function getArtistDetail(id) {
  return async (dispatch) => {
    try {
      const artist = await api.get(`/artists/${id}`);
      const artistAlbums = await api.get(`/artists/${id}/albums`);
      const artistTopTracks = await api.get(`/artists/${id}/top-tracks`, {
        params: {
          market: "ES",
        },
      });
      const artistRelated = await api.get(`/artists/${id}/related-artists`);
      // console.log("artist api : ", artist);
      // console.log("artistAlbums api : ", artistAlbums);
      // console.log("artistTopTracks api : ", artistTopTracks);
      // console.log("artistRelated api : ", artistRelated);
      dispatch({
        type: "ARTIST_DETAIL_SUCCESS",
        payload: { artist: artist.data },
      });
      dispatch({
        type: "ARTIST_ALBUMS_SUCCESS",
        payload: { artistAlbums: artistAlbums.data },
      });
      dispatch({
        type: "ARTIST_TOPTRACKS_SUCCESS",
        payload: { artistTopTracks: artistTopTracks.data },
      });
      dispatch({
        type: "ARTIST_RELATED_SUCCESS",
        payload: { artistRelated: artistRelated.data },
      });
    } catch (e) {
      console.log(e);
    }
  };
}

function getAlbumsDetail(id) {
  return async (dispatch) => {
    try {
      const albums = await api.get(`/albums/${id}`);
      const albumsTracks = await api.get(`/albums/${id}/tracks`);

      dispatch({
        type: "ALBUMS_DETAIL_SUCCESS",
        payload: { albums: albums.data },
      });
      dispatch({
        type: "ALBUMS_TRACKS_SUCCESS",
        payload: { albumsTracks: albumsTracks.data },
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export const detailsAction = { getArtistDetail, getAlbumsDetail };
