import { actionType } from "../action/type";

const initialState = {
  me: null
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_ME:
      state.me = payload;
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
