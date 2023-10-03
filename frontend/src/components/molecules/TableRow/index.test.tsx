import { render, screen, fireEvent } from "@testing-library/react";

import { CustomTableRow } from ".";
import theme from "../../../theme";

describe("CustomTableRow component", () => {
  it("renders with default data", () => {
    const onClickMock = jest.fn();
    render(
      <CustomTableRow
        coinName="Bitcoin"
        coinSrc="ethereum.png"
        coinCaption="BTC"
        coinPrice={328553.73}
        coinChange="+1.06%"
        coinMarketCap="$60.1T"
        coinWatchlisted={false}
        onClick={onClickMock}
      />
    );

    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("$328553.73")).toBeInTheDocument();
    expect(screen.getByText("+1.06%")).toHaveStyle(
      `color: ${theme.palette.gamma_success[500]}`
    );
    expect(screen.getByText("$60.1T")).toBeInTheDocument();
  });

  it("calls onClick when row is clicked", () => {
    const onClickMock = jest.fn();
    const boxClickMock = jest.fn();
    render(
      <CustomTableRow
        coinName="Bitcoin"
        coinSrc="bitCoin.png"
        coinCaption="BTC"
        coinPrice={328553.73}
        coinChange="-1.06%"
        coinMarketCap="$60.1T"
        coinWatchlisted={true}
        onClick={onClickMock}
        boxClick={boxClickMock}
      />
    );
    expect(screen.getByText("-1.06%")).toHaveStyle(
      `color: ${theme.palette.gamma_error[500]}`
    );
    fireEvent.click(screen.getByTestId("star-icon"));
    expect(onClickMock).toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("row-name"));
    expect(boxClickMock).toHaveBeenCalled();
  });
});
