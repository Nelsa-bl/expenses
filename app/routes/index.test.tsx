import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Index from "~/routes/index";

describe("Home page", () => {
  it("renders a heading", () => {
    render(<Index />, { wrapper: MemoryRouter });

    const heading = screen.getByRole("heading", {
      name: /Alasco HQ/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
