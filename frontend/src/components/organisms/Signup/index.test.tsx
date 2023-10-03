import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Signup from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";
import { SIGNUP_ORG } from "../../../constants";

describe("Signup component", () => {
  const onClickSignupMock = jest.fn();
  const onClickGoogleCardMock = jest.fn();
  const onClickLoginLinkMock = jest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Signup
          onClickSignup={onClickSignupMock}
          onClickGoogleCard={onClickGoogleCardMock}
          onClickLoginLink={onClickLoginLinkMock}
          alertMessage={true}
        />
      </ThemeProvider>
    );
  });

  it("should renders correctly", () => {
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.getByTestId("invalid-msg")).toBeInTheDocument();
  });

  it("should handles input changes", () => {
    const fullNameInput = screen.getByPlaceholderText(
      SIGNUP_ORG.fullNamePlaceholder
    );
    const emailInput = screen.getByPlaceholderText(SIGNUP_ORG.emailPlaceholder);
    const passwordInput = screen.getByPlaceholderText(
      SIGNUP_ORG.passwordPlaceholder
    );
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    expect(screen.getByText("Sign up")).toBeEnabled();
  });

  it('should calls onClickSignup when the "Sign Up" button is clicked', () => {
    const fullNameInput = screen.getByPlaceholderText(
      SIGNUP_ORG.fullNamePlaceholder
    );
    const emailInput = screen.getByPlaceholderText(SIGNUP_ORG.emailPlaceholder);
    const passwordInput = screen.getByPlaceholderText(
      SIGNUP_ORG.passwordPlaceholder
    );
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    const signUpButton = screen.getByText("Sign up");
    expect(signUpButton).toBeEnabled();
    fireEvent.click(signUpButton);
    expect(onClickSignupMock).toHaveBeenCalledTimes(1);
  });
  it("should handles invalid email and password input changes", () => {
    const fullNameInput = screen.getByPlaceholderText(
      SIGNUP_ORG.fullNamePlaceholder
    );
    const emailInput = screen.getByPlaceholderText(SIGNUP_ORG.emailPlaceholder);
    const passwordInput = screen.getByPlaceholderText(
      SIGNUP_ORG.passwordPlaceholder
    );
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "johnxample.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    const invalidEmailMsg = screen.getByTestId("email-msg");
    const invalidPasswordMsg = screen.getByTestId("password-msg");
    expect(invalidEmailMsg).toBeInTheDocument();
    expect(invalidPasswordMsg).toBeInTheDocument();
  });
});
describe(" SignUp component without alert message", () => {
  const onClickSignupMock = jest.fn();
  const onClickGoogleCardMock = jest.fn();
  const onClickLoginLinkMock = jest.fn();

  it("should renders correctly without alert message", () => {
    render(
      <ThemeProvider theme={theme}>
        <Signup
          onClickSignup={onClickSignupMock}
          onClickGoogleCard={onClickGoogleCardMock}
          onClickLoginLink={onClickLoginLinkMock}
          alertMessage={false}
        />
      </ThemeProvider>
    );
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.queryByText("Already Account Exists")).toBeNull();
  });
});
