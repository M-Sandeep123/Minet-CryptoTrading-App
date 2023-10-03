import React from "react";
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "../Dropdown";

const options = [
  { value: "24", name: "24h" },
  { value: "36", name: "36h" },
  { value: "48", name: "48h" },
];

describe("Dropdown component", () => {
  it("renders with initial value and options", () => {
    const initialValue = "24";
    render(<Dropdown initialValue={initialValue} options={options} />);

    const dropdown = screen.getByRole("button");
    const selectedOption = screen.getByText("24h");

    expect(dropdown).toBeInTheDocument();
    expect(selectedOption).toBeInTheDocument();
  });

  it("updates selected value on change", () => {
    const initialValue = "36";
    render(<Dropdown initialValue={initialValue} options={options} />);

    const dropdown = screen.getByRole("button");

    fireEvent.mouseDown(dropdown);
    const option2 = screen.getByText("36h");
    fireEvent.click(option2);

    expect(dropdown).toHaveTextContent("36h");
  });

  it("updates selected value using changeDropValue", () => {
    const { container } = render(
      <Dropdown initialValue="" options={options} />
    );
    const onChange = jest.fn();
    const dropdown = screen.getByRole("button") as HTMLInputElement;
    expect(dropdown).toBeInTheDocument();

    fireEvent.mouseDown(dropdown);
    const selectedOption = screen.getByText("48h");
    fireEvent.click(selectedOption);
  });
});
