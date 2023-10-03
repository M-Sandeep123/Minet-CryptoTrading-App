import TypographyWithIcon from "../TypographyWithIcon";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { usdCard } from "../../../constants";

const StyledBox = styled(Box)({
  width: "96.5%",
  height: "100%",
  padding: "24px",
  display: "inline-flex",
  borderRadius: "4px",
  gap: "10px",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  alignItems: "center",
  justifyContent: "space-between",
});

const StyledInnerBox = styled(Box)({
  alignItems: "flex-end",
  display: "inline-flex",
  gap: "12px",
});
export interface UsdCardProps {
  disableButton: boolean;
}
const UsdCard: React.FC<UsdCardProps> = ({ ...props }) => {
  return (
    <StyledBox>
      <TypographyWithIcon
        src={usdCard.cardSrc}
        width={usdCard.cardWidth}
        height={usdCard.cardHeigth}
        variant1={usdCard.cardVariant}
        label1={usdCard.cardLabel}
        color1={theme.palette.gamma_grey[500]}
        typography2={
          <CustomTypography
            variant="body2"
            label="Cash"
            color={theme.palette.beta_text.medium_emphasis}
          ></CustomTypography>
        }
      />
      <StyledInnerBox>
        <ButtonAtom
          buttonVariant={"outlined"}
          buttonHeight={42}
          buttonLabel={
            <CustomTypography
              variant={"button"}
              label={"CASH DEPOSIT"}
              color={theme.palette.primary[500]}
            />
          }
          sx={{ variant: theme.typography.button }}
          buttonColor={theme.palette.primary[500]}
          disabled={props.disableButton}
          buttonBgColor={theme.palette.gamma_grey.contrastText}
          buttonBorder="1px solid #0052FF"
          buttonBorderRadius="4px"
        ></ButtonAtom>
        <ButtonAtom
          buttonVariant={"outlined"}
          buttonWidth={135}
          buttonHeight={42}
          buttonLabel={
            <CustomTypography
              variant={"button"}
              label={"WITHDRAWAL"}
              color={theme.palette.primary[500]}
            />
          }
          sx={{ variant: theme.typography.button }}
          buttonColor={theme.palette.primary[500]}
          disabled={props.disableButton}
          buttonBgColor={theme.palette.gamma_grey.contrastText}
          buttonBorder="1px solid #0052FF"
          buttonBorderRadius="4px"
        ></ButtonAtom>
      </StyledInnerBox>
    </StyledBox>
  );
};

export default UsdCard;
