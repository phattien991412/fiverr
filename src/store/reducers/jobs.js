import { actionType } from "../action/type";

const initialState = {
  listJobs: [],
  titleJobs: [],
  movie: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_LIST_JOBS:
      state.listJobs = payload;
      return { ...state };

    case actionType.SET_TITLE_JOBS:
      state.titleJobs = payload;
      return { ...state };

      case actionType.SET_TEST:
        state.movie = payload;
        return { ...state };

    default:
      return state;
  }
};
