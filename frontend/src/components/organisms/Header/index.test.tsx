import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  test("should render the component correctly", () => {
    render(
      <Header
        title={"Dashboard"}
        onClickAvatarIcon={() => {}}
        isButtonRequired={true}
        isSellButtonDisabled={true}
        isBuyButtonDisabled={true}
      ></Header>
    );
    const titleElement = screen.getByText("Dashboard");
    expect(titleElement).toBeInTheDocument();

    const buttonLabelElement = screen.getByText("SELL");
    expect(buttonLabelElement).toBeInTheDocument();
  });

  test("should execute onclick when sell button is active", () => {
    const handleSellButton = jest.fn();
    render(
      <Header
        title={"Dashboard"}
        onClickSellButton={handleSellButton}
        onClickAvatarIcon={() => {}}
        isButtonRequired={true}
        isSellButtonDisabled={false}
        isBuyButtonDisabled={true}
      ></Header>
    );
    const sellButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(sellButtonElement[0]);

    expect(handleSellButton).toHaveBeenCalledTimes(1);
  });

  test("should execute onclick when buy button is active", () => {
    const handleBuyButton = jest.fn();
    render(
      <Header
        title={"Dashboard"}
        onClickBuyButton={handleBuyButton}
        onClickAvatarIcon={() => {}}
        isButtonRequired={true}
        isSellButtonDisabled={true}
        isBuyButtonDisabled={false}
      ></Header>
    );
    const buyButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(buyButtonElement[1]);

    expect(handleBuyButton).toHaveBeenCalledTimes(1);
  });

  test("should execute onclick when both buttons are enabled", () => {
    const handleBuyButton = jest.fn();
    const handleSellButton = jest.fn();
    render(
      <Header
        title={"Dashboard"}
        onClickSellButton={handleSellButton}
        onClickBuyButton={handleBuyButton}
        onClickAvatarIcon={() => {}}
        isButtonRequired={true}
        isSellButtonDisabled={false}
        isBuyButtonDisabled={false}
      ></Header>
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
      <Header
        title={"Dashboard"}
        onClickSellButton={handleSellButton}
        onClickBuyButton={handleBuyButton}
        onClickAvatarIcon={() => {}}
        isButtonRequired={true}
        isSellButtonDisabled={true}
        isBuyButtonDisabled={true}
      ></Header>
    );
    const buyButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(buyButtonElement[1]);

    expect(handleBuyButton).toHaveBeenCalledTimes(0);

    const sellButtonElement = screen.getAllByTestId("test-btn");
    fireEvent.click(sellButtonElement[0]);

    expect(handleSellButton).toHaveBeenCalledTimes(0);
  });
});
