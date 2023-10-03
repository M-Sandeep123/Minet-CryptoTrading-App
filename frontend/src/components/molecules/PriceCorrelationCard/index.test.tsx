import React from "react";
import { render } from "@testing-library/react";
import PriceCorrelationCard from ".";

describe("PriceCorrelationCard Component", () => {
  const mockPriceCorrelations = [
    {
      cardSrc: "blackBitcoin",
      cardLabel: "Bitcoin",
      cardContent: "Moves tightly together",
      cardPrize: "$3,285,553.73",
      cardPercentage: "100%",
    },
  ];

  it("renders without crashing", () => {
    render(
      <PriceCorrelationCard priceCorrelationsData={mockPriceCorrelations} />
    );
  });

  it("renders correct card data", () => {
    const { getByText, getByAltText } = render(
      <PriceCorrelationCard priceCorrelationsData={mockPriceCorrelations} />
    );

    mockPriceCorrelations.forEach((data) => {
      const image = getByAltText("Bitcoin");
      expect(image).toHaveAttribute("src", data.cardSrc);

      const label = getByText(data.cardLabel);
      const content = getByText(data.cardContent);
      const prize = getByText(data.cardPrize);
      const percentage = getByText(data.cardPercentage);

      expect(label).toBeInTheDocument();
      expect(content).toBeInTheDocument();
      expect(prize).toBeInTheDocument();
      expect(percentage).toBeInTheDocument();
    });
  });
});
