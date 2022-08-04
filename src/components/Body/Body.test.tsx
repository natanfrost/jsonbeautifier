import { fireEvent, render, screen } from "@testing-library/react";

import Body from "./Body";

describe("<Body />", () => {
  it("should render all elements", () => {
    render(<Body />);
    const header = screen.getByText("Paste your JSON below");
    expect(header).toBeInTheDocument();

    const button = screen.getByRole("add-new");
    expect(button).toBeInTheDocument();
  });

  it("should show snackbar on error", () => {
    render(<Body />);
    const input = screen.getByRole("input-json");
    input.innerText = "abcd";

    const button = screen.getByRole("add-new");
    fireEvent.click(button);

    const snackbar = screen.getByRole("toast");
    expect(snackbar).toBeVisible();
  });
});
