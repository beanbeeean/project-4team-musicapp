import deepmerge from "deepmerge";

let initialState = {
  allCharts: {},
  allChartsSpotify: [],
  loading: false,
};

function chartsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_ALL_CHARTS_REQUEST":
      return { ...state, loading: true };
    case "GET_ALL_CHARTS_FAILED":
      return { ...state, loading: false };
    case "GET_ALL_CHARTS_SUCCESS":
      console.log("this ", state.allCharts);
      return {
        ...state,
        // allCharts: deepmerge(state.allCharts, payload.allCharts),
        allCharts: payload.allCharts,
        loading: false,
      };
    case "GET_ALL_CHARTS_IMG_SUCCESS":
      return {
        ...state,
        allChartsSpotify: payload.allChartsSpotify,
        // allChartsImg: deepmerge(state.allChartsImg, payload.allChartsImg),
      };
    default:
      return { ...state };
  }
}

export default chartsReducer;
