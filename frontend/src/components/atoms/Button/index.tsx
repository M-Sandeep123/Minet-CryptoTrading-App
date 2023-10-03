import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";
import React from "react";
import theme from "../../../theme";

export interface ButtonAtomProps {
  buttonVariant: "contained" | "outlined" | "text";
  buttonSize?: "small" | "medium" | "large";
  buttonLabel?: any;
  buttonColor?: string;
  buttonStartIcon?: React.ReactNode;
  buttonEndIcon?: React.ReactNode;
  buttonWidth?: number;
  buttonHeight?: number;
  buttonBgColor?: string;
  buttonBorder?: string;
  buttonBorderRadius?: string;
  sx?: SxProps;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonAtom = ({
  buttonVariant,
  buttonSize,
  buttonLabel,
  buttonColor,
  buttonStartIcon,
  buttonEndIcon,
  buttonWidth,
  buttonHeight,
  buttonBgColor,
  buttonBorder,
  buttonBorderRadius,
  sx,
  onClick,
  disabled,
}: ButtonAtomProps) => {
  const StyledButton = styled(Button)`
    && {
      background-color: ${disabled
        ? theme.palette.primary[300]
        : buttonBgColor};
      color: ${buttonColor};
      width: ${buttonWidth}px;
      height: ${buttonHeight}px;
      border: ${buttonBorder};
      border-radius: ${buttonBorderRadius}px;
      box-shadow: none;
      transition: box-shadow 0.3s ease-in-out;
    }
    &&:hover {
      box-shadow: 0px 0px 5px ${buttonBgColor};
    }
  `;

  return (
    <StyledButton
      data-testid="test-btn"
      variant={buttonVariant}
      size={buttonSize}
      startIcon={buttonStartIcon}
      endIcon={buttonEndIcon}
      sx={sx}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonLabel}
    </StyledButton>
  );
};

export default ButtonAtom;
