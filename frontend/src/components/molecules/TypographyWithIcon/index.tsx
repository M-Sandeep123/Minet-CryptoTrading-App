import CustomTypography from "../../atoms/Typography";
import IconAtom, { IconProps } from "../../atoms/Icon";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const StyleBox = styled(Box)({
  display: "inline-flex",
  gap: "16px",
  justifyContent: "start",
});

const StyleTypographyBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "2px",
  justifyContent: "center",
});

export interface TypographyWithIconProps extends IconProps {
  src: any;
  width: any;
  height: any;
  variant1: string;
  color1?: string;
  label1: string;
  typography2?: ReactNode;
}
const TypographyWithIcon: React.FC<TypographyWithIconProps> = ({
  ...props
}) => {
  return (
    <StyleBox>
      <IconAtom
        src={props.src}
        alt="image"
        width={props.width}
        height={props.height}
      />
      <StyleTypographyBox>
        <CustomTypography
          variant={props.variant1}
          label={props.label1}
          color={props.color1}
        ></CustomTypography>
        {props.typography2}
      </StyleTypographyBox>
    </StyleBox>
  );
};

export default TypographyWithIcon;
