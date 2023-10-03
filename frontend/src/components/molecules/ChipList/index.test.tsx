import React from "react";
import { render } from "@testing-library/react";
import ChipList from "../ChipList"; 
import { chipData } from "../../../constants"; 

describe("ChipList Component", () => {
it("renders chips with correct labels", () => {
  const { getByText } = render(<ChipList chipListData={chipData} />);

  chipData.forEach((chip) => {
    const chipElement = getByText(chip.label);
    expect(chipElement).toBeInTheDocument();
  });
});

  it("does not render any chips if chipListData is empty", () => {
    const { queryByText } = render(<ChipList chipListData={[]} />);

    chipData.forEach((chip) => {
      const chipElement = queryByText(chip.label);
      expect(chipElement).toBeNull();
    });
  });


});
