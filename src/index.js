import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./redux/reducers";

import ThemedApp from "./components/ThemedApp";

import "./index.scss";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>,
  document.getElementById("root")
);
