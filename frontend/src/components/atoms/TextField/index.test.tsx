import { fireEvent, render, screen } from "@testing-library/react";
import CustomizedInputBase from ".";

describe("TextField component", () => {
  test("render TextField correctly", () => {
    render(
      <CustomizedInputBase
        isTwoIconRequired={false}
        isIconRequired={false}
        placeholder={"you@example.com"}
        isPasswordIconRequired={false}
        label={"email"}
      ></CustomizedInputBase>
    );
    const placeholderElement = screen.getByText("email");
    expect(placeholderElement).toBeInTheDocument();
  });

  test("renders PasswordIcon", () => {
    render(
      <CustomizedInputBase
        isTwoIconRequired={false}
        isIconRequired={false}
        placeholder={"Password"}
        isPasswordIconRequired={true}
        label={"password"}
      ></CustomizedInputBase>
    );
    const labelElement = screen.getByText("password");
    expect(labelElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("openIcon");
    expect(imageElement).toBeInTheDocument();
  });

  test("renders PasswordIcon with test visibility", () => {
    render(
      <CustomizedInputBase
        isTwoIconRequired={false}
        isIconRequired={false}
        placeholder={"Password"}
        isPasswordIconRequired={true}
        label={"password"}
      ></CustomizedInputBase>
    );
    const labelElement = screen.getByText("password");
    expect(labelElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("openIcon");
    fireEvent.click(imageElement);
    expect(screen.getByAltText("closeIcon")).toBeInTheDocument();
  });

  test("renders SearchIcon", () => {
    render(
      <CustomizedInputBase
        isTwoIconRequired={false}
        isIconRequired={true}
        placeholder={"Search all assets"}
        isPasswordIconRequired={false}
        label={"search"}
      ></CustomizedInputBase>
    );
    const labelElement = screen.getByText("search");
    expect(labelElement).toBeInTheDocument();

    const searchIconElement = screen.getByAltText("searchicon");
    expect(searchIconElement).toBeInTheDocument();
  });

  test("renders both SearchIcon and FilterIcon", () => {
    render(
      <CustomizedInputBase
        isTwoIconRequired={true}
        isIconRequired={false}
        placeholder={"Search all assets"}
        isPasswordIconRequired={false}
        label={"search"}
      ></CustomizedInputBase>
    );
    const labelElement = screen.getByText("search");
    expect(labelElement).toBeInTheDocument();

    const searchIconElement = screen.getByAltText("searchicon");
    expect(searchIconElement).toBeInTheDocument();

    const filterIconElement = screen.getByAltText("filtericon");
    expect(filterIconElement).toBeInTheDocument();
  });
});
