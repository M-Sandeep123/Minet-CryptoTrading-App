import React from "react";
import { render } from "@testing-library/react";
import TransactionTableRow from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

const mockData = {
  date: new Date("2023-08-01T08:00:00Z"),
  transactionCryptoName: "Bitcoin",
  otherUser: "Teja Mannikanti",
  quantity: "+0.0010 BTC",
  transactionType: "Purchase",
  availableBalance: "+$900",
};

test("renders TransactionTableRow with provided data", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <TransactionTableRow {...mockData} />
    </ThemeProvider>
  );

  expect(getByText("Aug")).toBeInTheDocument();
  expect(getByText("1")).toBeInTheDocument();
  expect(getByText("Bitcoin")).toBeInTheDocument();
  expect(getByText("Teja Mannikanti")).toBeInTheDocument();
  expect(getByText("Purchase")).toBeInTheDocument();
  expect(getByText("+0.0010 BTC")).toBeInTheDocument();
  expect(getByText("+$900")).toBeInTheDocument();
});
