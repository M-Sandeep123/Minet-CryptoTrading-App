import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import RecentTransactionRow from ".";
import theme from "../../../theme";

const mockData = {
  transactionDate: new Date(),
  cryptoName: "Bitcoin",
  cryptoQuantity: "-0.0234510 BTC",
  transactionType: "Sold",
  currentBalance: "+ $34000.00",
};

test("renders RecentTransaction table row with provided data", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <RecentTransactionRow {...mockData} />
    </ThemeProvider>
  );

  expect(getByText("Bitcoin")).toBeInTheDocument();
  expect(getByText("Sold")).toBeInTheDocument();
  expect(getByText("-0.0234510 BTC")).toBeInTheDocument();
  expect(getByText("+ $34000.00")).toBeInTheDocument();
});
