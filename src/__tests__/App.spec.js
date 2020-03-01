import React from "react";
import { render, fireEvent, act, cleanup } from "@testing-library/react";
import App from "../components/App";

import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureStore([]);

describe("<App/>", () => {
  const store = mockStore({
    images: {
      data: {
        photo: [
          {
            id: "49604868876",
            secret: "54c25eafb3",
            server: "65535",
            farm: 66,
            title: "Gartnerkofel"
          }
        ]
      }
    }
  });

  store.dispatch = jest.fn();

  afterAll(() => {
    cleanup();
    jest.resetAllMocks();
  });

  const { getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("should change the text box value", () => {
    const getInput = getByRole("textbox");
    act(() => {
      fireEvent.change(getInput, { target: { value: "landscapes" } });
    });
    expect(getInput.value).toBe("landscapes");
  });

  it("should dispatch an action when input changes", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("should loads a image", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const imageElement = container.querySelector("img");
    expect(imageElement.title).toBe("Gartnerkofel");
  });

  it("should loads the pagination", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const pagination = container.querySelector(".pagination-container");
    expect(pagination).toBeInTheDocument();
  });
});
