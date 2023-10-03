import { fireEvent, render, screen } from "@testing-library/react";
import TradeTemplate from ".";
import { BrowserRouter } from "react-router-dom";

describe("Trade Template ", () => {
  it("should render content provided to image and content", () => {
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={true}
          isBuyButtonDisabled={true}
        />
      </BrowserRouter>
    );
    expect(screen.getByText("Trade")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });
  test("should execute onclick when sell button is active", () => {
    const handleSellButton = jest.fn();
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={true}
          isBuyButtonDisabled={true}
        />
      </BrowserRouter>
    );
    const sellButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(sellButtonElement[0]);

    expect(handleSellButton).toHaveBeenCalledTimes(0);
  });

  test("should execute onclick when buy button is active", () => {
    const handleBuyButton = jest.fn();
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickBuyButton={handleBuyButton}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={true}
          isBuyButtonDisabled={false}
        />
      </BrowserRouter>
    );
    const buyButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(buyButtonElement[1]);

    expect(handleBuyButton).toHaveBeenCalledTimes(1);
  });

  test("should execute onclick when both buttons are enabled", () => {
    const handleBuyButton = jest.fn();
    const handleSellButton = jest.fn();
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickSellButton={handleSellButton}
          onClickBuyButton={handleBuyButton}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={false}
          isBuyButtonDisabled={false}
        />
      </BrowserRouter>
    );
    const buyButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(buyButtonElement[1]);

    expect(handleBuyButton).toHaveBeenCalledTimes(1);

    const sellButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(sellButtonElement[0]);

    expect(handleSellButton).toHaveBeenCalledTimes(1);
  });

  test("should not execute onclick when both buttons are disabled", () => {
    const handleBuyButton = jest.fn();
    const handleSellButton = jest.fn();
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickSellButton={handleSellButton}
          onClickBuyButton={handleBuyButton}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={true}
          isBuyButtonDisabled={true}
        />
      </BrowserRouter>
    );
    const buyButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(buyButtonElement[1]);

    expect(handleBuyButton).toHaveBeenCalledTimes(0);

    const sellButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(sellButtonElement[0]);

    expect(handleSellButton).toHaveBeenCalledTimes(0);
  });

  test("should toggles dashboardActive state on icon click", () => {
    render(
      <BrowserRouter>
        <TradeTemplate
          content={<h4>Content</h4>}
          title={"Trade"}
          onClickAvatarIcon={() => {}}
          isButtonRequired={true}
          isSellButtonDisabled={true}
          isBuyButtonDisabled={true}
        />
      </BrowserRouter>
    );
    const iconAtIndex1 = screen.getAllByTestId("icon")[1];
    fireEvent.click(iconAtIndex1);

    const iconAtIndex0 = screen.getAllByTestId("icon")[0];
    fireEvent.click(iconAtIndex0);

    const altIconAtIndex1 = screen.getAllByTestId("icon")[1];
    expect(altIconAtIndex1.getAttribute("src")).toContain("test-file-stub");
  });
});
