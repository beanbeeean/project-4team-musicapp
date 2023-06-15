let initialState = {
  newRelease: {},
  charts: {},
  chartsImg: [],
};
function homeReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "NEW_RELEASE_SUCCESS":
      return { ...state, newRelease: payload.newRelease };
    case "GET_CHARTS_SUCCESS":
      return { ...state, charts: payload.charts };
    case "GET_CHARTS_IMG_SUCCESS":
      return { ...state, chartsImg: payload.chartsImg };
    default:
      return { ...state };
  }
}

export default homeReducer;
