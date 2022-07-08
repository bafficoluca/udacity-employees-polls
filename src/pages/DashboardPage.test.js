import React from "react";
import { screen } from "@testing-library/react";
import { createStore } from "redux";

import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "../reducers";
import middleware from "../middleware";

import { loggedInInitialState } from "../utils/test-utils";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  const store = createStore(reducer, loggedInInitialState, middleware);

  it("should correctly categorize new questions and answered questions", () => {
    renderWithProviders(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <DashboardPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByTestId("new-question")[0]).toHaveTextContent(
      "SARAHEDO"
    );
    expect(screen.getAllByTestId("new-question")).toHaveLength(1);
    expect(screen.getAllByTestId("answered-question")[0]).toHaveTextContent(
      "MTSAMIS"
    );
    expect(screen.getAllByTestId("answered-question")).toHaveLength(1);
  });
});
