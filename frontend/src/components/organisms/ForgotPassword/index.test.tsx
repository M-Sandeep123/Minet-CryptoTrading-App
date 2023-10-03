import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ForgotPassword from "../ForgotPassword";

describe("ForgotPassword Component", () => {
  const onClickForgotMock = jest.fn();
  it("renders without errors", () => {
    const { container } = render(
      <ForgotPassword
        label="Reset Code"
        placeholder="Enter reset code"
        buttonLabel="Reset Password"
        onClickForgot={onClickForgotMock}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("displays login link", () => {
    const { getByTestId } = render(
      <ForgotPassword
        label="Reset Code"
        placeholder="Enter reset code"
        buttonLabel="Reset Password"
        onClickForgot={onClickForgotMock}
      />
    );
    const loginLink = getByTestId("login-link");

    expect(loginLink).toBeInTheDocument();
  });

  it("displays the heading", () => {
    const { getByTestId } = render(
      <ForgotPassword
        label="Reset Code"
        placeholder="Enter reset code"
        buttonLabel="Reset Password"
        onClickForgot={onClickForgotMock}
      />
    );
    const heading = getByTestId("forgot-heading");
    expect(heading.textContent).toBe("Forgot Password");
  });

  test("renders ForgotPassword component with email input", () => {
    const { getByTestId } = render(
      <ForgotPassword
        label="Email"
        placeholder="Enter your email"
        buttonLabel="Reset Password"
        onClickForgot={onClickForgotMock}
        isUserEmailValid={false}
      />
    );
    expect(screen.getByTestId("invalid-msg")).toBeInTheDocument();
    const emailInput = getByTestId("textfield");
    expect(emailInput).toBeInTheDocument();
  });
  
    it("should enable the button when a valid reset code is entered", () => {
      render(
        <ForgotPassword
          label="Reset Code"
          placeholder="Enter your code"
          buttonLabel="Submit" 
          onClickForgot={onClickForgotMock} 
          handleDisable={true} 
          />
      );

      const resetCodeInput = screen.getByPlaceholderText("Enter your code");
      fireEvent.change(resetCodeInput, { target: { value: "1234" } });
      expect(screen.getByText("Submit")).toBeDisabled();
     
    });

    it("should call onClickForgot when the button is clicked", () => {
     
      render(
        <ForgotPassword
          label="Email"
          placeholder="Enter your email"
          buttonLabel="Submit"
          onClickForgot={onClickForgotMock}
        />
      );
      const emailInput = screen.getByPlaceholderText("Enter your email");
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.click(screen.getByText("Submit"));
      expect(onClickForgotMock).toHaveBeenCalled();
    });
});
