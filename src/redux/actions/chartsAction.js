import api from "../api";

let chartsArr = [];
function getAllCharts(page) {
  return async (dispatch) => {
    // 차트 url
    try {
      console.log("page :", page);
      dispatch({ type: "GET_ALL_CHARTS_REQUEST" });
      let url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${
        process.env.REACT_APP_API_KEY
      }&format=json${page ? `&page=${page}` : ""}`;
      let parseObj = new URL(url.toString());
      let response = await fetch(parseObj);
      let data = await response.json();
      console.log("data : ", data);
      //   chartsArr.push(data);
      //   console.log("sdsd", chartsArr);
      let tracksSpotify;
      let tracksArr = [];

      for (let i = 0; i < data.tracks.track.length; i++) {
        tracksSpotify = await api.get("/search", {
          params: {
            q: data.tracks.track[i].name,
            type: "track",
            limit: 1,
          },
        });

        // tracksArr.push(tracksImg.data.tracks.items[0].album.images[2].url);
        tracksArr.push(tracksSpotify.data.tracks.items[0]);
      }
      
      dispatch({
        type: "GET_ALL_CHARTS_SUCCESS",
        payload: { allCharts: data },
      });
      dispatch({
        type: "GET_ALL_CHARTS_IMG_SUCCESS",
        payload: { allChartsSpotify: tracksArr },
      });
    } catch (e) {
      dispatch({ type: "GET_ALL_CHARTS_FAILED" });
      console.log(e);
    }
  };
}

export const chartsAction = { getAllCharts };
