import { FETCH_IMAGES, IMAGE_SELECTED } from "../actions/types";

const INITIAL_STATE = {
  selected: '',
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
    case IMAGE_SELECTED:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};
