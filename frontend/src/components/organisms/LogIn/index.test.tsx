import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LogIn from "."; 
import { ThemeProvider } from "@emotion/react";
import theme from "../../../theme";

describe("LogIn component", () => {
  const onClickSignInMock = jest.fn();
  const onClickGoogleCardMock = jest.fn();
  const onClickSignUpLinkMock = jest.fn();
  const onClickForgotPasswordMock = jest.fn();

  beforeEach(() => {
    render(
        <ThemeProvider theme={theme}>
      <LogIn
        onClickSignIn={onClickSignInMock}
        onClickGoogleCard={onClickGoogleCardMock}
        onClickSignUpLink={onClickSignUpLinkMock}
        onClickForgotPassword={onClickForgotPasswordMock}
        isUserDataValid={true}
      />
      </ThemeProvider>
    );
  });

  it("should handles input changes for email and password fields", () => {
    const passwordInput = screen.getByPlaceholderText("Enter Password")as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(passwordInput.value).toBe("password123");
  });

  it("should calls onClickSignIn when 'Log In' button is clicked", () => {
    const emailInput = screen.getByPlaceholderText("you@company.com")as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText("Enter Password") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    const logInButton = screen.getByText("Sign In");
    fireEvent.click(logInButton);

    expect(onClickSignInMock).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  it("should displays error message for invalid email format", () => {
    const emailInput = screen.getByPlaceholderText("you@company.com");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    
    const emailErrorMsg = screen.getByTestId("email-msg");
    expect(emailErrorMsg).toBeInTheDocument();
  });

  it("should invokes onClickGoogleCard when Google logo is clicked", () => {
    const googleLogo = screen.getByText("Google");
    fireEvent.click(googleLogo);

    expect(onClickGoogleCardMock).toHaveBeenCalledTimes(1);
  });

  it("should invokes onClickForgotPassword when 'Forgot password?' is clicked", () => {
    const forgotPasswordLink = screen.getByText("Forgot Password");
    fireEvent.click(forgotPasswordLink);

    expect(onClickForgotPasswordMock).toHaveBeenCalledTimes(1);
  });

  it("should invokes onClickSignUpLink when 'Signup' link is clicked", () => {
    const signUpLink = screen.getByText("Signup");
    fireEvent.click(signUpLink);

    expect(onClickSignUpLinkMock).toHaveBeenCalledTimes(1);
  });
  it("should render with error message of inavild details",()=>{
    render(
    <ThemeProvider theme={theme}>
    <LogIn
      onClickSignIn={onClickSignInMock}
      onClickGoogleCard={onClickGoogleCardMock}
      onClickSignUpLink={onClickSignUpLinkMock}
      onClickForgotPassword={onClickForgotPasswordMock}
      isUserDataValid={false}
    />
    </ThemeProvider>
    )
    const emailErrorMsg = screen.getByTestId("invalid-msg");
    expect(emailErrorMsg).toBeInTheDocument();
  })
});
