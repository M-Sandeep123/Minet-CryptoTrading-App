import { fireEvent, render, screen } from "@testing-library/react";
import ResetPassword from ".";

import { ResetPasswordConstants } from "../../../constants";

describe("Reset Password ", () => {
  test("should render the text and text field correctly", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );

    expect(
      screen.getByText(ResetPasswordConstants.PASSWORD_HEADING)
    ).toBeInTheDocument();
    expect(screen.getByTestId("textfield-1")).toBeInTheDocument();
    expect(screen.getByTestId("textfield-2")).toBeInTheDocument();
  });

  test("should updates password state correctly", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const passwordInput = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, {
      target: { value: "Abcde@12" },
    });

    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const updatePassword = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    expect(updatePassword.value).toBe("Abcde@12");
  });

  test("should update re-enter password state correctly", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde@12" },
    });
    const passwordInput = screen.getByPlaceholderText(
      ResetPasswordConstants.RE_ENTER_PASSWORD_PLACEHOLDER
    );

    fireEvent.change(passwordInput, {
      target: { value: "Abcde@12" },
    });

    expect(passwordInput).toHaveAttribute("value", "Abcde@12");
  });

  test("should render password error message for length 8 correctlyy", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde@2" },
    });

    const lengthElement = screen.getByText(
      "Password must be at least 8 characters long"
    );
    expect(lengthElement).toBeInTheDocument();
  });

  test("should render password error message for atleast 1 digit correctlyy", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde@aa" },
    });

    const noDigitElement = screen.getByText(
      "Password must contain at least 1 digit"
    );
    expect(noDigitElement).toBeInTheDocument();
  });

  test("should render password error message for atleast 1 special character correctlyy", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
      />
    );
    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde1aa" },
    });

    const noSpecialElement = screen.getByText(
      "Password must contain at least 1 special character"
    );
    expect(noSpecialElement).toBeInTheDocument();
  });

  test("should display error passwords doesn't match", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
        validPassword={false}
      />
    );
    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde@12" },
    });
    const passwordInput = screen.getByPlaceholderText(
      ResetPasswordConstants.RE_ENTER_PASSWORD_PLACEHOLDER
    );

    fireEvent.change(passwordInput, {
      target: { value: "Abcde@1" },
    });

    const mismatchElement = screen.getByText("Passwords do not match");
    expect(mismatchElement).toBeInTheDocument();
  });

  test("should test password visibility on click", () => {
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={() => {}}
        passwordMessage={false}
       
      />
    );

    const imageElement = screen.getAllByAltText("openIcon");
    fireEvent.click(imageElement[0]);
    expect(screen.getByAltText("closeIcon")).toBeInTheDocument();
  });

  test("should execute onClick function on button click", () => {
    const handleClick = jest.fn();
    render(
      <ResetPassword
        onClickReset={handleClick}
        onClickLogin={() => {}}
        passwordMessage={false}
        validPassword={false}
      />
    );

    const passwordInputOne = document.getElementById(
      "textfield-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInputOne, {
      target: { value: "Abcde@12" },
    });
    const passwordInput = screen.getByPlaceholderText(
      ResetPasswordConstants.RE_ENTER_PASSWORD_PLACEHOLDER
    );

    fireEvent.change(passwordInput, {
      target: { value: "Abcde@12" },
    });

    const buttonElement = screen.getByTestId("test-btn");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Invalid Password")).toBeInTheDocument();
  });

  test("should execute onClick function on button click", () => {
    const handleClick = jest.fn();
    render(
      <ResetPassword
        onClickReset={() => {}}
        onClickLogin={handleClick}
        passwordMessage={true}
      />
    );

    const passwordSuccessELement = screen.getByText(
      "Password reset successful"
    );
    expect(passwordSuccessELement).toBeInTheDocument();

    const buttonElement = screen.getByTestId("test-btn");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
