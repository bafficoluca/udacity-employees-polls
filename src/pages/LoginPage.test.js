import React from "react";
import { screen, fireEvent, within } from "@testing-library/react";
import { createStore } from "redux";

import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import reducer from "../reducers";
import middleware from "../middleware";

import LoginPage from "./LoginPage";
import { notLoggedInInitialState } from "../utils/test-utils";

describe("LoginPage", () => {
  const store = createStore(reducer, notLoggedInInitialState, middleware);

  it("sould match the snapshot when no user is selected", () => {
    var view = renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <LoginPage />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("should show the expected users in the UsersSelect component", () => {
    renderWithProviders(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login-page"]}>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.mouseDown(screen.getByRole("button", { name: "Log in as... ​" }));
    const listbox = screen.getByRole("listbox");

    expect(within(listbox).getByText("Sarah Edo")).toBeInTheDocument();
    expect(within(listbox).getByText("Mike Tsamis")).toBeInTheDocument();
  });
});
