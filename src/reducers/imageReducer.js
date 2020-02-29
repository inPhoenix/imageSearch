import { FETCH_IMAGES } from "../actions/types";

const INITIAL_STATE = {
  data: {
    photo: []
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        data: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
