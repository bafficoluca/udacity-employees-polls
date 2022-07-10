import React from "react";
import { render, screen } from "@testing-library/react";
import { createStore } from "redux";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "../reducers";
import middleware from "../middleware";

import { loggedInInitialState } from "../utils/test-utils";
import App from "../App";

describe("LeaderboardPage", () => {
  const store = createStore(reducer, loggedInInitialState, middleware);

  it("should correctly display the users chart", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/leaderboard"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const userNameCell = screen.getAllByTestId("user-name-cell");

    expect(userNameCell[0]).toHaveTextContent("Sarah Edo");
    expect(userNameCell[1]).toHaveTextContent("Mike Tsamis");
    expect(userNameCell[2]).toHaveTextContent("Tyler McGinnis");
  });
});
