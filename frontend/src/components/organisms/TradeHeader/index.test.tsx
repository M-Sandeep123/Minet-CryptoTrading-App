import React from "react";
import { render } from "@testing-library/react";
import TradeHeader from "../TradeHeader";
import { ChooseCryptoCardConstants } from "../../../constants";
import bitcoin from "../../../../public/assets/images/bitCoin.png";

describe("TradeHeader Component", () => {
  const mockProps = {
    iconsrc: bitcoin,
    coinName: ChooseCryptoCardConstants.COINNAME,
    coinLabel: ChooseCryptoCardConstants.COINLABEL,
    coinValueChange: ChooseCryptoCardConstants.COINVALUE,
    marketCap: ChooseCryptoCardConstants.MARKETAMOUNT,
    volume: ChooseCryptoCardConstants.HOURSAMOUNT,
    supply: ChooseCryptoCardConstants.SUPPLYAMOUNT,
    onClick: jest.fn(),
  };

  it("should renders coin name and label", () => {
    const { getByText } = render(
      <TradeHeader iconSrc={bitcoin} {...mockProps} />
    );

    expect(getByText(ChooseCryptoCardConstants.COINNAME)).toBeInTheDocument();
    expect(getByText(ChooseCryptoCardConstants.COINLABEL)).toBeInTheDocument();
  });

  it("should renders coin value change", () => {
    const { getByText } = render(
      <TradeHeader iconSrc={bitcoin} {...mockProps} />
    );

    expect(getByText(ChooseCryptoCardConstants.COINVALUE)).toBeInTheDocument();
  });

  it("should renders market cap, volume, and supply", () => {
    const { getByText } = render(
      <TradeHeader iconSrc={bitcoin} {...mockProps} />
    );

    expect(
      getByText(ChooseCryptoCardConstants.MARKETAMOUNT)
    ).toBeInTheDocument();
    expect(
      getByText(ChooseCryptoCardConstants.HOURSAMOUNT)
    ).toBeInTheDocument();
    expect(
      getByText(ChooseCryptoCardConstants.SUPPLYAMOUNT)
    ).toBeInTheDocument();
  });

  it("should renders wishlist button", () => {
    const { getByText } = render(
      <TradeHeader iconSrc={bitcoin} {...mockProps} />
    );
    expect(getByText(ChooseCryptoCardConstants.WISHLIST)).toBeInTheDocument();
  });
});
