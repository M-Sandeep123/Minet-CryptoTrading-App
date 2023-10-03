import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export interface CustomTypographyProps extends TypographyProps {
  variant: any;
  color?: any;
  label: any;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  variant,
  color,
  label,
  ...props
}) => {
  return (
    <Typography variant={variant} color={color} {...props}>
      {label}
    </Typography>
  );
};

export default CustomTypography;
