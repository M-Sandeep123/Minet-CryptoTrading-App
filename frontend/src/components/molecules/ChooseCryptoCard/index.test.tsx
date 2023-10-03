import React from "react";
import { render } from "@testing-library/react";
import ChooseCryptoCard from ".";
import bitcoin from "../../../../public/assets/images/bitCoin.png";
import { cryptoCardData } from "../../../constants";

describe("ChooseCryptoCard Component", () => {
  const cryptoCardProps = {
    cryptoCardSrc: bitcoin,
    cryptoCardLabel: cryptoCardData.cryptoLabel,
    cryptoCardDescription: cryptoCardData.cryptoDescription,
    cryptoCardSelected: true,
  };
    
  test("renders correctly", () => {
    const { getByText } = render(<ChooseCryptoCard {...cryptoCardProps} />);

    const cryptoLabel = getByText("Bitcoin");
    const cryptoDescription = getByText("$3,406,069.54");

    expect(cryptoLabel).toBeInTheDocument();
    expect(cryptoDescription).toBeInTheDocument();
  });
    
  test("renders with blue border when selected", () => {
    const { getByTestId } = render(<ChooseCryptoCard {...cryptoCardProps} />);
    const cryptoCard = getByTestId("styled-box");

    expect(cryptoCard).toBeInTheDocument();

    const computedStyles = window.getComputedStyle(cryptoCard);
    expect(computedStyles.border).toBe("2px solid blue");
  });
    
  test("doesn't render border when not selected", () => {
    const { getByTestId } = render(
      <ChooseCryptoCard {...cryptoCardProps} cryptoCardSelected={false} />
    );

    const cryptoCard = getByTestId("styled-box");
    expect(cryptoCard).toBeInTheDocument();

    const computedStyles = window.getComputedStyle(cryptoCard);
    expect(computedStyles.border).toBe("");
  });
});
