let initialState = {
  newRelease: {},
  charts: {},
  chartsSpotify: [],
};
function homeReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "NEW_RELEASE_SUCCESS":
      return { ...state, newRelease: payload.newRelease };
    case "GET_CHARTS_SUCCESS":
      return { ...state, charts: payload.charts };
    case "GET_CHARTS_IMG_SUCCESS":
      return { ...state, chartsSpotify: payload.chartsSpotify };
    default:
      return { ...state };
  }
}

export default homeReducer;
