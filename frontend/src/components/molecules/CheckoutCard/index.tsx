import TypographyWithIcon, {
  TypographyWithIconProps,
} from "../TypographyWithIcon";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export interface CheckoutPageCardProps extends TypographyWithIconProps {
  variant: string;
  label: string;
  color: string;
}
const StyleBox = styled(Box)({
  display: "inline-flex",
  width: "96%",
  padding: "16px",
  borderRadius: "4px",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  alignItems: "center",
  gap: "8px",
});
const CheckoutPageCard: React.FC<CheckoutPageCardProps> = ({ ...props }) => {
  return (
    <StyleBox>
      <TypographyWithIcon
        src={props.src}
        width={props.width}
        height={props.height}
        variant1={props.variant1}
        label1={props.label1}
        color1={props.color1}
        typography2={props.typography2}
      ></TypographyWithIcon>
      <CustomTypography
        variant={props.variant}
        label={props.label}
        color={props.color}
      ></CustomTypography>
    </StyleBox>
  );
};

export default CheckoutPageCard;
