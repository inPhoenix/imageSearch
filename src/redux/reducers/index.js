import { combineReducers } from "redux";
import images from "./imageReducer";
import themes from "./themeReducer";

export default combineReducers({
    images,
    themes
});
