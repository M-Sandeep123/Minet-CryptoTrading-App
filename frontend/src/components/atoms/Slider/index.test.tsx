import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Slider from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

describe("Slider Component", () => {
  it("should render the Slider component with default values", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Slider getSlideValue={() => {}} />
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it("should update the value when the slider is moved", () => {
    const getSlideValueMock = jest.fn();
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Slider getSlideValue={getSlideValueMock} />
      </ThemeProvider>
    );
    const slider = getByRole("slider");
    fireEvent.change(slider, { target: { value: 50 } });
    expect(getSlideValueMock).toHaveBeenCalledWith(50);
  });
});
