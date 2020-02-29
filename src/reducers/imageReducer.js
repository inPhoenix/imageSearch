import { FETCH_IMAGES } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        state
      };
    default:
      return state;
  }
};
