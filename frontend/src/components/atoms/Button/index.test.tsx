import { fireEvent, render, screen } from "@testing-library/react";
import ButtonAtom from "../Button";
import theme from "../../../theme";

describe("ButtonAtom component", () => {
  test("renders button with provided text", () => {
    const buttonText = "BUY";
    const { getByText } = render(
      <ButtonAtom buttonVariant={"contained"} buttonLabel="BUY" />
    );
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies provided variant to button", () => {
    const buttonVariant = "contained";
    const { container } = render(<ButtonAtom buttonVariant={buttonVariant} />);
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass(`MuiButton-${buttonVariant}`);
  });

  test("triggers onClick callback when button is clicked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <ButtonAtom onClick={onClick} buttonVariant={"contained"} />
    );
    const buttonElement = getByTestId("test-btn");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("applies provided color to button", () => {
    const buttonColor = "red";
    const { container } = render(
      <ButtonAtom buttonColor={buttonColor} buttonVariant={"contained"} />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle(`color: ${buttonColor}`);
  });

  test("applies provided width and height to button", () => {
    const buttonWidth = 200;
    const buttonHeight = 50;
    const { container } = render(
      <ButtonAtom
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        buttonVariant={"contained"}
      />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle(`width: ${buttonWidth}px`);
    expect(buttonElement).toHaveStyle(`height: ${buttonHeight}px`);
  });

  test("applies provided background color to button", () => {
    const backgroundColor = "blue";
    const { container } = render(
      <ButtonAtom buttonBgColor={backgroundColor} buttonVariant={"contained"} />
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`);
  });

    test("applies provided border radius to button", () => {
        const borderRadius = "5";
        const { container } = render(
            <ButtonAtom buttonVariant="contained" buttonBorderRadius={borderRadius} />
        );
        const buttonElement = container.querySelector("button");
        expect(buttonElement).toHaveStyle(`border-radius: ${borderRadius}px`);
    });

    test("renders with custom background color when not disabled", () => {
      const { getByTestId } = render(
        <ButtonAtom
          buttonVariant="contained"
          disabled={false}
          buttonBgColor="blue"
        />
      );

      const button = getByTestId("test-btn");
      expect(button).toHaveStyle("background-color: blue");
    });
       test("renders with custom background color when not disabled", () => {
         const { getByTestId } = render(
           <ButtonAtom
             buttonVariant="contained"
             disabled={true}
           />
         );

         const button = getByTestId("test-btn");
         expect(button).toHaveStyle("background-color: #CCE3FF");
       });
});
