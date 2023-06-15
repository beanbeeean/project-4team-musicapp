import api from "../api";

function getNewReleaseAlbums(selection, offsetNum) {
  console.log("action 호출");
  return async (dispatch) => {
    try {
      const albums = await api.get("/browse/new-releases", {
        params: {
          country: selection,
          limit: 12,
          offset: offsetNum,
        },
      });

      // console.log("albums : ", albums.data.albums.items);
      dispatch({
        type: "NEW_RELEASE_SUCCESS",
        payload: { newRelease: albums.data.albums.items },
      });
    } catch (e) {
      console.log(e);
    }

    // dispatch({
    //   type: "SEARCH_ARTISTS_SUCCESS",
    //   payload: { searchArtists: artists.data.artists.items },
    // });
  };
}

function getChartsTopTen() {
  return async (dispatch) => {
    // 차트 url
    let url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=10`;
    let parseObj = new URL(url.toString());
    let response = await fetch(parseObj);
    let data = await response.json();
    // console.log("data : ", data);

    let tracksImg;
    let tracksArr = [];
    // console.log("data : ", data.tracks[0].name);
    for (let i = 0; i < data.tracks.track.length; i++) {
      tracksImg = await api.get("/search", {
        params: {
          q: data.tracks.track[i].name,
          type: "track",
          limit: 1,
        },
      });
      //   console.log("dddd", data.tracks.track[i].name);
      //   console.log(tracksImg.data.tracks.items[0].album.images[0].url);
      tracksArr.push(tracksImg.data.tracks.items[0].album.images[2].url);
    }
    // console.log("tracks : ", tracksImg);
    console.log("tracksArr : ", tracksArr);

    dispatch({ type: "GET_CHARTS_SUCCESS", payload: { charts: data } });
    dispatch({
      type: "GET_CHARTS_IMG_SUCCESS",
      payload: { chartsImg: tracksArr },
    });
  };
}

export const homeAction = { getNewReleaseAlbums, getChartsTopTen };
