import { render, screen } from "@testing-library/react";
import TypographyWithIcon from ".";
import bitcoins from "../../../../public/assets/icons/bitcoins.svg";
import theme from "../../../theme";
import CustomTypography from "../../atoms/Typography";

describe("Typography WithIcon Component", () => {
  test("renders the component correctly", () => {
    render(
      <TypographyWithIcon
        src={bitcoins}
        alt="image"
        width="42px"
        height="42px"
        variant1="caption2"
        color1={theme.palette.beta_text.medium_emphasis}
        label1="Paying through"
        typography2={
          <CustomTypography
            variant="body1"
            label="Bitcoin wallet"
            color={theme.palette.beta_text.high_emphasis}
          />
        }
      ></TypographyWithIcon>
    );

    const iconElement = screen.getByAltText("image");
    expect(iconElement).toBeInTheDocument();

    const typographyElement = screen.getByText("Paying through");
    expect(typographyElement).toBeInTheDocument();
  });

  test("renders the variant correctly", () => {
    render(
      <TypographyWithIcon
        src={bitcoins}
        alt="image"
        width="42px"
        height="42px"
        variant1="caption2"
        color1={theme.palette.beta_text.medium_emphasis}
        label1="Paying through"
        typography2={
          <CustomTypography
            variant="body1"
            label="Bitcoin wallet"
            color={theme.palette.beta_text.high_emphasis}
          />
        }
      ></TypographyWithIcon>
    );

    const typographyElement = screen.getByText("Paying through");
    expect(typographyElement).toHaveClass("MuiTypography-caption2");
  });

  test("renders the color correctly", () => {
    render(
      <TypographyWithIcon
        src={bitcoins}
        alt="image"
        width="42px"
        height="42px"
        variant1="caption2"
        color1={theme.palette.beta_text.medium_emphasis}
        label1="Paying through"
        typography2={
          <CustomTypography
            variant="body1"
            label="Bitcoin wallet"
            color={theme.palette.beta_text.high_emphasis}
          />
        }
      ></TypographyWithIcon>
    );

    const typographyElement = screen.getByText("Paying through");
    expect(typographyElement).toHaveClass("css-4s882o-MuiTypography-root");
  });

  test("renders with one typography", () => {
    render(
      <TypographyWithIcon
        src={bitcoins}
        alt="image"
        width="42px"
        height="42px"
        variant1="caption2"
        color1={theme.palette.beta_text.medium_emphasis}
        label1="Paying through"
      ></TypographyWithIcon>
    );

    const iconElement = screen.getByAltText("image");
    expect(iconElement).toBeInTheDocument();

    const typographyElement = screen.getByText("Paying through");
    expect(typographyElement).toBeInTheDocument();

    expect(typographyElement).not.toHaveAttribute("typography2");
  });
});
