import { render, screen } from "@testing-library/react";
import CheckoutPageCard from ".";

import ethereum from "../../../../public/assets/images/ethereum.png";

describe("Checkout Page Card component", () => {
  test("renders the component correctly", () => {
    render(
      <CheckoutPageCard
        variant="subtitle1"
        label="0.5234510 ETH"
        color="theme.palette.beta_text.high_emphasis"
        src={ethereum}
        width="32px"
        height="32px"
        variant1="caption1"
        label1="Ethereum"
      />
    );

    const iconElement = screen.getByAltText("image");
    expect(iconElement).toBeInTheDocument();

    const typographyElement = screen.getByText("Ethereum");
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveClass("MuiTypography-caption1");

    const secondTypoElement = screen.getByText("0.5234510 ETH");
    expect(secondTypoElement).toBeInTheDocument();
    expect(secondTypoElement).toHaveClass("MuiTypography-subtitle1");
  });
});
