import { FETCH_IMAGES, IMAGE_SELECTED } from "./types";
import { API_KEY } from "../secrets";
import flickr from "../apis/flickr";

export const searchImages = searchTerm => async dispatch => {
  const endpoint = `?method=flickr.photos.search&text=${searchTerm}&api_key=${API_KEY}&format=json&nojsoncallback=1`;
  try {
    const response = await flickr.get(endpoint);
    dispatch({ type: FETCH_IMAGES, payload: response.data.photos });
  } catch (e) {
    console.error(e);
  }
};

export const selectImage = image => ({
  type: IMAGE_SELECTED,
  payload: image
});
