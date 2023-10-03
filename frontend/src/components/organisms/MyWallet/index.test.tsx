import React from "react";
import { render } from "@testing-library/react";
import MyWallet from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

const mockProps = {
  usdCurrenyValue: "1000",
  transactiondata: [
    {
      id: 1,
      userId: 1,
      date: new Date(),
      transactionCryptoName: "BTC",
      otherUser: "User 2",
      quantity: "10",
      transactionType: "Buy",
      availableBalance: "990",
    },
  ],
};

describe("MyWallet component", () => {
  it("should renders without crashing", () => {
    const { container } = render(<MyWallet {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it("should renders wallet label", () => {
    const { getByText } = render(<MyWallet {...mockProps} />);
    expect(getByText("My Wallets")).toBeInTheDocument();
  });

  it("should renders USD label", () => {
    const { getByText } = render(<MyWallet {...mockProps} />);
    expect(getByText("USD Coin")).toBeInTheDocument();
  });

  it("should renders wallet transaction label", () => {
    const { getByText } = render(<MyWallet {...mockProps} />);
    expect(getByText("Recent Transactions")).toBeInTheDocument();
  });

  it("should renders a transaction row when image is not shown", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MyWallet {...mockProps} image={true} />
      </ThemeProvider>
    );
    expect(getByText("BTC")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("990")).toBeInTheDocument();
  });

  it("should renders default value image and text when image is shown", () => {
    const { getByAltText, getByText } = render(
      <MyWallet {...mockProps} image={false} />
    );
    expect(getByAltText("default Value")).toBeInTheDocument();
  });
});
