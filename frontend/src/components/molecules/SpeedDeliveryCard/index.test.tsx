import { fireEvent, render, screen } from "@testing-library/react";
import SpeedDeliveryCard from ".";

const options = [
  {
    value: "2",
    name: "Instant :",
    time: "2-5 minutes",
    fees: "Delivery fees : 0.001 BTC",
  },
  {
    value: "4",
    name: "Faster :",
    time: "4 hours",
    fees: "Delivery fees : 0.0001 BTC",
  },
  {
    value: "120",
    name: "Fast :",
    time: "120 hours",
    fees: "Delivery fees : 0.00001 BTC",
  },
  {
    value: "0",
    name: "None",
    time: "",
    fees: "",
  },
];

describe("Speed Delivery Card Component", () => {
  test("should render the component", () => {
    render(
      <SpeedDeliveryCard
        initialValue={"2"}
        options={options}
        getSelectedOption={()=>{}}
      ></SpeedDeliveryCard>
    );

    const imageElement = screen.getByAltText("image");
    expect(imageElement).toBeInTheDocument();

    const selectElement = screen.getByText("Instant : 2-5 minutes");
    expect(selectElement).toBeInTheDocument();

    const selectFeeElement = screen.getByText("Transaction fees: 0.001 BTC");
    expect(selectFeeElement).toBeInTheDocument();
  });

  test("should render the component to check the selected value", () => {
    render(
      <SpeedDeliveryCard
        initialValue={""}
        options={options} getSelectedOption={()=>{}}      ></SpeedDeliveryCard>
    );
    const onChange = jest.fn();
    const dropdown = screen.getByRole("button") as HTMLInputElement;
    expect(dropdown).toBeInTheDocument();

    fireEvent.mouseDown(dropdown);
    const selectedOption = screen.getByText("4 hours");
    fireEvent.click(selectedOption);
  });
});
