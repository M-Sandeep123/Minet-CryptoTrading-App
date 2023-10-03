import { Stack, styled, Box } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import ButtonAtom from "../../atoms/Button";
import theme from "../../../theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  CAREER,
  COPYRIGHT,
  HELP,
  LABEL,
  LANGUAGE,
  PRIVACY,
} from "../../../constants";

const StyledContainer = styled(Stack)({
  display: "flex",
  top: "1068px",
  left: "82px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const NavContainer = styled(Box)({
  display: "flex",
  gap: "24px",
  flexDirection: "row",
  flexGrow: 1,
});

const FooterSubContainer = styled(Box)({
  display: "flex",
  gap: "24px",
  flexDirection: "row",
});

const Footer = () => {
  return (
    <StyledContainer>
      <NavContainer>
        <CustomTypography
          variant={"body2"}
          label={LABEL}
          color={theme.palette.primary[500]}
        />
        <CustomTypography
          variant={"body2"}
          label={CAREER}
          color={theme.palette.primary[500]}
        />
        <CustomTypography
          variant={"body2"}
          label={PRIVACY}
          color={theme.palette.primary[500]}
        />
        <CustomTypography variant={"body2"} label={COPYRIGHT} />
      </NavContainer>
      <FooterSubContainer>
        <ButtonAtom
          buttonVariant={"outlined"}
          buttonLabel={LANGUAGE}
          buttonColor={`${theme.palette.beta_text.high_emphasis}`}
          buttonBorder="1px solid #E8E8F7"
          buttonWidth={170}
          buttonHeight={42}
          buttonBorderRadius="4"
          buttonEndIcon={<KeyboardArrowDownIcon />}
          sx={{ padding: "4px 12px", justifyContent: "space-between" }}
        />
        <ButtonAtom
          buttonVariant={"outlined"}
          buttonLabel={
            <CustomTypography
              variant={"button"}
              label={HELP}
              color={theme.palette.primary[500]}
            />
          }
          buttonWidth={109}
          buttonHeight={42}
          buttonBorderRadius="4"
        />
      </FooterSubContainer>
    </StyledContainer>
  );
};

export default Footer;
