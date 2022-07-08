import React from "react";

import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("sould match the snapshot when no user is selected", () => {
    var view = renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <LoginPage />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
