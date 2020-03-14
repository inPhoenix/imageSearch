import {
  FETCH_IMAGES,
  IMAGE_SELECTED,
  IS_LOADING,
  ADD_ERROR,
  CHANGE_THEME
} from "./types";
import { API_KEY } from "../../secrets";
import flickr from "../../apis/flickr";

export const searchImages = searchTerm => async dispatch => {
  const params = "&format=json&nojsoncallback=1&sort=interestingness-desc";
  const endpoint = `?method=flickr.photos.search&text=${searchTerm}&api_key=${API_KEY}${params}`;
  try {
    dispatch(setLoading(true));
    const response = await flickr.get(endpoint);
    if (response.data.stat === "ok") {
      dispatch({ type: FETCH_IMAGES, payload: response.data.photos });
    }
    if (response.data.stat === "fail") {
      dispatch({
        type: ADD_ERROR,
        error: response.data.message
      });
    }

    dispatch(setLoading(false));
  } catch (e) {
    console.error(e);
    dispatch(setLoading(false));
    dispatch({ type: ADD_ERROR, error: e.message || "Something went wrong" });
  }
};

export const selectImage = image => ({
  type: IMAGE_SELECTED,
  payload: image
});

const setLoading = state => {
  return { type: IS_LOADING, status: state };
};

export const changeTheme = state => {
  return { type: CHANGE_THEME, payload: state };
};
