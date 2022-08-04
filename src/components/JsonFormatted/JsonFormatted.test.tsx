import { render, screen } from "@testing-library/react";
import JsonFormatted from "./JsonFormatted";

describe("<JsonRow />", () => {
  it("should render all elements correctly", async () => {
    render(<JsonFormatted id="1" json="{ 'test': 123 }" />);

    const headerText = screen.getByText("Beautified JSON");
    expect(headerText).toBeInTheDocument();
  });
});
