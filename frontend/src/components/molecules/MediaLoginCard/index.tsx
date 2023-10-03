import { Box, Stack, styled } from "@mui/material";
import ImageAtom from "../../atoms/Image";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";

interface PropsTypes {
  logo: string;
  alt: string;
  label: string;
}

const StyledLogo = styled(ImageAtom)({
  width: "20px",
  height: "20px",
});

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "157.33px",
  height: "94px",
  border: `solid 1px ${theme.palette.gamma_grey[100]}`,
  borderRadius: "12px",
  backgroundColor: theme.palette.primary[100],
}));

const StyledInnerContainer = styled(Stack)({
  alignItems: "center",
  Padding: "20px 40px",
  gap: "5px",
});

const LogoTypography = ({ logo, alt, label }: PropsTypes) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledLogo src={logo} alt={alt} />
        <CustomTypography
          variant="body1"
          color={theme.palette.beta_text.medium_emphasis}
          label={label}
        />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default LogoTypography;
