import { render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "../src/utils/test-utils";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  renderWithProviders(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText("Log in");
  expect(linkElement).toBeInTheDocument();
});
