import React from "react";
import { render, screen } from "@testing-library/react";
import PortfolioStats from ".";
import { graphData } from "../../../constants";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";


const mockProps = {
  graphData: graphData,
  totalInvestLabel: "Total Invest Label",
  totalInvestChange: "+$100",
  totalInvestAmount: "$10,000",
  cryptoLabel: "Crypto Label",
  cryptoChange: "+$200",
  cryptoAmount: "$5,000",
  flagPointer: true,
};

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

describe("PortfolioStats component", () => {
  it("should renders the StatGraph component", () => {
    render(
      <ThemeProvider theme={theme}>
        <PortfolioStats {...mockProps} />
      </ThemeProvider>
    );
    const assertElement = screen.getByText("ALL");
    expect(assertElement).toBeInTheDocument();
  });

  it("should displays the total investment information", () => {
    render(
      <ThemeProvider theme={theme}>
        <PortfolioStats {...mockProps} />
      </ThemeProvider>
    );
    const totalInvestLabelElement = screen.getByText("Total Invest Label");
    const totalInvestChangeElement = screen.getByText("+$100");
    const totalInvestAmountElement = screen.getByText("$10,000");

    expect(totalInvestLabelElement).toBeInTheDocument();
    expect(totalInvestChangeElement).toBeInTheDocument();
    expect(totalInvestAmountElement).toBeInTheDocument();
  });

  it("should displays the crypto information", () => {
    render(
      <ThemeProvider theme={theme}>
        <PortfolioStats {...mockProps} flagPointer={false} />
      </ThemeProvider>
    );
    const cryptoLabelElement = screen.getByText("Crypto Label");
    const cryptoChangeElement = screen.getByText("+$200");
    const cryptoAmountElement = screen.getByText("$5,000");

    expect(cryptoLabelElement).toBeInTheDocument();
    expect(cryptoChangeElement).toBeInTheDocument();
    expect(cryptoAmountElement).toBeInTheDocument();
  });

  it("should displays the image for the new user", () => {
    render(
      <ThemeProvider theme={theme}>
        <PortfolioStats {...mockProps} flagPointer={false} graphData={null} />
      </ThemeProvider>
    );
    const imageElement = screen.getByAltText("no-report-image");
    expect(imageElement).toBeInTheDocument();
  });
});
