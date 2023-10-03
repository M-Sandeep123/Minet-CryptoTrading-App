import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AmountDetail from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

describe("AmountDetail component", () => {
  it("renders correctly with initial values", () => {
    const mockGetSelectQuantity = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <AmountDetail
          cryptoLabel="BTC"
          cryptoPrice={20000}
          accountBalance={20000}
          price={20000}
          getSelectQuantity={mockGetSelectQuantity}
          isBuyButton={false}
          buttonLabel={"Sell max"}
        />
      </ThemeProvider>
    );

    expect(screen.getByText("Amount details")).toBeInTheDocument();
    expect(screen.getByText("1 BTC = $ 20000")).toBeInTheDocument();
  });

  it("updates the selected value and slider value when slider is changed", () => {
    const mockGetSelectQuantity = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <AmountDetail
          isBuyButton={true}
          cryptoLabel="BTC"
          cryptoPrice={20000}
          accountBalance={20000}
          price={20000}
          getSelectQuantity={mockGetSelectQuantity}
          buttonLabel={"Buy max"}
        />
      </ThemeProvider>
    );

    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 50 } });
    expect(mockGetSelectQuantity).toHaveBeenCalledWith(0.5);
    expect(screen.getByText("Buy max")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Buy max"));
    expect(mockGetSelectQuantity).toHaveBeenCalledWith(1);
  });
});
