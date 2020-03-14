import {
  FETCH_IMAGES,
  IMAGE_SELECTED,
  IS_LOADING,
  ADD_ERROR
} from "../actions/types";
import { INITIAL_STATE } from "./initialState";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        data: {
          ...action.payload
        },
        error: ""
      };
    case IMAGE_SELECTED:
      return {
        ...state,
        selected: action.payload
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.status
      };
    case ADD_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
