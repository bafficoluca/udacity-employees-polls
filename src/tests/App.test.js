import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("The App", () => {
  it("should automatically redirect to the LoginPage if the user is no authenticated yet", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Log in")).toBeInTheDocument();
  });
});
