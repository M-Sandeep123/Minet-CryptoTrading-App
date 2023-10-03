import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import LogoTypography from ".";
import theme from "../../../theme";

describe("LogoTypography Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <LogoTypography
          logo="path/to/logo.png"
          alt="Logo Alt Text"
          label="Sample Label"
        />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("displays the provided label", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <LogoTypography
          logo="path/to/logo.png"
          alt="Logo Alt Text"
          label="Sample Label"
        />
      </ThemeProvider>
    );

    expect(getByText("Sample Label")).toBeInTheDocument();
  });

  it("renders the logo with the correct alt text", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <LogoTypography
          logo="path/to/logo.png"
          alt="Logo Alt Text"
          label="Sample Label"
        />
      </ThemeProvider>
    );
    expect(getByAltText("Logo Alt Text")).toBeInTheDocument();
  });
});
