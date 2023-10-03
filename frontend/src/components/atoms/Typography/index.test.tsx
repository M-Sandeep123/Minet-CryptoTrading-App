import { render, screen } from "@testing-library/react";
import CustomTypography from ".";

describe("CustomTypography component", () => {
  test("rendering the children correctly", () => {
    render(
      <CustomTypography
        variant="h4"
        label={"Reset Password"}
      ></CustomTypography>
    );

    const childrenElement = screen.getByText("Reset Password");
    expect(childrenElement).toBeInTheDocument();
  });

  test("rendering the variant prop correctly", () => {
    render(
      <CustomTypography
        variant="body2"
        label={"My Portfolio"}
      ></CustomTypography>
    );

    const typographyElement = screen.getByText("My Portfolio");

    expect(typographyElement).toHaveClass("MuiTypography-body2");
  });
});
