import { render, screen } from "@testing-library/react";

import ImageAtom from ".";
import bitCoinImg from "/public/assets/images/bitCoin.png";
import defaultPortfolioImage from "/public/assets/images/defaultPortfolioValue.png";
import defaultTransactionValue from "/public/assets/images/defaultTransactionsValue.png";

describe("ImageAtom", () => {
  it("renders PocketPay image", () => {
    render(<ImageAtom src={bitCoinImg} alt="image" width="42px" height="42px" />);
    const imageElement = screen.getByAltText("image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", bitCoinImg);
  });

  it("renders Security image", () => {
    render(<ImageAtom src={defaultPortfolioImage} alt="image" width="297px" height="223px" />);
    const imageElement = screen.getByAltText("image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("width", "297px");
    expect(imageElement).toHaveAttribute("height", "223px");
  });

  it("renders Share link image", () => {
    render(<ImageAtom src={defaultTransactionValue} alt="image" width="162px" height="61px" />);
    const imageElement = screen.getByAltText("image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", defaultTransactionValue);
    expect(imageElement).toHaveAttribute("width", "162px");
    expect(imageElement).toHaveAttribute("height", "61px");
  });
});
