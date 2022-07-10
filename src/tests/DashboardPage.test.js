import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createStore } from "redux";

import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "../reducers";
import middleware from "../middleware";

import { loggedInInitialState } from "../utils/test-utils";
import DashboardPage from "../pages/DashboardPage";
import App from "../App";

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

  it("should correctly logout when pressing the logout button", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const logoutButton = screen.getByText("LOGOUT");
    const userNameLabel = screen.getByTestId("user-name-label");

    expect(userNameLabel).toHaveTextContent("TYLER MCGINNIS");

    fireEvent.click(logoutButton);

    expect(userNameLabel).not.toBeInTheDocument();
  });
});
