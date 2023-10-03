import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import PaymentTemplate from ".";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

describe("PaymentTemplate", () => {
  it("renders the navbar, header, content, and footer", () => {
    const onClickAvatar = jest.fn();
    const mockContent = <Box data-testid="mock-content">Mock Content</Box>;
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <PaymentTemplate content={mockContent} onClickAvatar={onClickAvatar} />
      </BrowserRouter>
    );
    expect(screen.getByAltText("avatarImage")).toBeInTheDocument();
    expect(getByTestId("mock-content")).toBeInTheDocument();
  });

  it("calls onClickAvatar when the avatar icon is clicked", () => {
    const onClickAvatar = jest.fn();
     render(
       <BrowserRouter>
         <PaymentTemplate content={<Box />} onClickAvatar={onClickAvatar} />
       </BrowserRouter>
     );
    const buyButtonElement = screen.getByAltText("avatarImage");
    fireEvent.click(buyButtonElement);
    expect(onClickAvatar).toHaveBeenCalled();
  });
});
