import { render, screen } from "@testing-library/react";
import UsdCard from ".";

describe("USD card Component", () => {
  test("renders the component with icon and typography", () => {
    render(<UsdCard disableButton={false} />);

    const iconElement = screen.getByAltText("image");
    expect(iconElement).toBeInTheDocument();

    const typographyElement = screen.getByText("Cash");
    expect(typographyElement).toBeInTheDocument();

    const coinElement = screen.getByText("USD Coin");
    expect(coinElement).toBeInTheDocument();
  });

  test("renders the component with button with correct styles", () => {
    const buttonHeight = 42;
    const { container } = render(<UsdCard disableButton={true} />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle(`height: ${buttonHeight}px`);
  });

  test("renders the component with button correct text", () => {
    render(<UsdCard disableButton={false} />);
    const buttonElement = screen.getByText("WITHDRAWAL");
    expect(buttonElement).toBeInTheDocument();
  });
});
