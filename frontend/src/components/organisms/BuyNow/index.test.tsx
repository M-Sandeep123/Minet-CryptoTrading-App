import React from "react";
import { render } from "@testing-library/react";
import BuyNowCard from "../BuyNow";

describe("BuyNowCard", () => {
  const props = {
   
    coinQty: "10 BTC",
    coinValue: "$10000",
    paymentMethod: "Credit Card",
    deliveryFees: "$10",
    depositTo: "Bank Account",
    priceOfQty: "$100000",
    transactionFee: "$5",
    total: "$100005",
    buttonLabel: "Buy Now",
    onClick: jest.fn(),
  };

  it("should renders heading text", () => {
    const { getByText } = render(<BuyNowCard isBuying={true} {...props} />);
    expect(getByText(props.depositTo)).toBeInTheDocument();
    expect(getByText("You are buying")).toBeInTheDocument();
  });

  it("should renders coin value", () => {
    const { getByTestId ,getByText} = render(<BuyNowCard isBuying={false} {...props} />);
    expect(getByText("You are selling")).toBeInTheDocument();
    expect(getByTestId("coin-value")).toBeInTheDocument();
  });
});
