import { render, screen } from "@testing-library/react";
import { MyPortfolio } from ".";
import theme from "../../../theme";
import { DUMMY_TRADE_TABLE_DATA, TRADE_TABLE_DATA } from "../../../constants";

describe("MyPortfolio Component", () => {
  const mockTradeData = [
    {
      coinName: "BitCoin",
      coinCaption: "BTC",
      coinPrice: 328553.73,
      coinChange: "+1.06%",
    },
  ];

  it("renders correctly with trade data and total balance", () => {
    render(
      <MyPortfolio totalbalance={12345.67} portfolioData={TRADE_TABLE_DATA} />
    );

    const totalBalanceElement = screen.getByText("$ 12345.67");
    expect(totalBalanceElement).toBeInTheDocument();

    const trade = mockTradeData[0];
    const coinNameElement = screen.getByText(trade.coinName);
    const coinCaptionElement = screen.getByText(trade.coinCaption);
    const coinPriceElement = screen.getByText(`$ ${trade.coinPrice}`);
    const coinChangeElement = screen.getByText(trade.coinChange);

    expect(coinNameElement).toBeInTheDocument();
    expect(coinCaptionElement).toBeInTheDocument();
    expect(coinPriceElement).toBeInTheDocument();
    expect(coinChangeElement).toBeInTheDocument();

    const expectedColor = trade.coinChange.includes("+")
      ? theme.palette.gamma_success[500]
      : theme.palette.gamma_error[500];
    expect(coinChangeElement).toHaveStyle({ color: expectedColor });
  });
  it('should render coin image for "png" file', () => {
    const { getByAltText } = render(
      <MyPortfolio totalbalance={1000} portfolioData={DUMMY_TRADE_TABLE_DATA} />
    );
    const bitcoinImage = getByAltText("Bitcoin");
    expect(bitcoinImage).toBeInTheDocument();

    const ethereumImage = getByAltText("Ethereum");
    expect(ethereumImage).toBeInTheDocument();
  });
});
