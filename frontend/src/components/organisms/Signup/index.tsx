import { Box, Divider, Stack, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import CustomizedInputBase from "../../atoms/TextField";
import ButtonAtom from "../../atoms/Button";
import theme from "../../../theme";
import LogoTypography from "../../molecules/MediaLoginCard";
import GOOGLE from "../../../../public/assets/images/google.png";
import FACEBOOK from "../../../../public/assets/images/facebook.png";
import MICROSOFT from "../../../../public/assets/images/microsoft.png";
import {
  EMAIL_REGEX,
  LOGIN_CARD,
  PASSWORD_REGEX,
  SIGNUP_ORG,
} from "../../../constants";
import { useState } from "react";

interface UserData {
  fullName: string;
  email: string;
  password: string;
}

interface PropsTypes {
  alertMessage?: boolean;
  onClickSignup: (userData: UserData) => void;
  onClickGoogleCard?: () => void;
  onClickLoginLink?: () => void;
}

export const Layout = styled(Stack)({
  height: "700px",
  width: "512px",
  gap: "52px",
  paddingLeft: "10%",
});

export const StyledTextField = styled(CustomizedInputBase)({
  height: "48.01px",
  width: "512px",
  borderRadius: "8px",
  "& .MuiInputBase-input": {
    ...theme.typography.caption2,
    color: "#343446",
  },
});

export const TextFieldsLayout = styled(Stack)({
  gap: "34px",
});

export const InnerField = styled(Stack)({
  gap: "16px",
});

export const MediaContainer = styled(Box)({
  display: "flex",
  gap: "30px",
});

export const NavgationContainer = styled(Box)({
  display: "flex",
  gap: "8px",
});

export const Container = styled(Box)({
  width: "512.02px",
  height: "700px",
  padding: "0px 104px",
});
const Signup = ({
  alertMessage,
  onClickGoogleCard,
  onClickLoginLink,
  onClickSignup,
}: PropsTypes) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnChangeFullName = (e: any) => {
    setFullName(e.target.value);
  };
  const handleOnChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleOnClickSignup = () => {
    const userDate = {
      fullName: fullName,
      email: email,
      password: password,
      balance: 50000,
    };
    onClickSignup(userDate);
  };
  const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email) && email.indexOf("@@") === -1;
  };
  const isPasswordValid = (password: string): boolean => {
    return PASSWORD_REGEX.test(password);
  };
  const isFormValid = (): boolean => {
    return isEmailValid(email) && isPasswordValid(password);
  };

  return (
    <Container>
      <Layout>
        <CustomTypography variant={"h4"} label={SIGNUP_ORG.header} />
        <TextFieldsLayout>
          <InnerField>
            <CustomTypography
              variant={"caption1"}
              label={SIGNUP_ORG.fullNameLable}
            />
            <StyledTextField
              isTwoIconRequired={false}
              isIconRequired={false}
              placeholder={SIGNUP_ORG.fullNamePlaceholder}
              isPasswordIconRequired={false}
              label={""}
              onChange={handleOnChangeFullName}
            />
          </InnerField>
          <InnerField>
            <CustomTypography
              variant={"caption1"}
              label={SIGNUP_ORG.emailLabel}
            />
            <StyledTextField
              isTwoIconRequired={false}
              isIconRequired={false}
              placeholder={SIGNUP_ORG.emailPlaceholder}
              isPasswordIconRequired={false}
              label={""}
              onChange={handleOnChangeEmail}
            />
            {!isEmailValid(email) && email !== "" && (
              <CustomTypography
                variant={"caption2"}
                label={SIGNUP_ORG.emailAlertMsg}
                color={"red"}
                data-testid="email-msg"
              />
            )}
          </InnerField>
          <InnerField>
            <CustomTypography
              variant={"caption1"}
              label={SIGNUP_ORG.passwordLabel}
            />
            <StyledTextField
              isTwoIconRequired={false}
              isIconRequired={false}
              placeholder={SIGNUP_ORG.passwordPlaceholder}
              isPasswordIconRequired={true}
              label={""}
              onChange={handleOnChangePassword}
            />
            {!isPasswordValid(password) && password !== "" && (
              <CustomTypography
                variant={"caption2"}
                label={SIGNUP_ORG.passwordAlertMsg}
                color={"red"}
                data-testid="password-msg"
              />
            )}
          </InnerField>
          <CustomTypography
            variant={"caption2"}
            label={SIGNUP_ORG.passwordDiscription}
            color={theme.palette.gamma_grey[500]}
          />
          {alertMessage === true && (
            <CustomTypography
              variant={"caption2"}
              label={SIGNUP_ORG.accountExists}
              color={"red"}
              data-testid="invalid-msg"
            />
          )}
          <ButtonAtom
            buttonVariant={"contained"}
            buttonLabel={SIGNUP_ORG.butLabel}
            buttonBorderRadius="4"
            buttonHeight={42}
            disabled={!isFormValid()}
            onClick={handleOnClickSignup}
            data-testid="signup-button"
            sx={{ textTransform: "none", cursor: "pointer" }}
          />
        </TextFieldsLayout>
        <Divider>
          <CustomTypography
            variant={"caption1"}
            label={"Or"}
            color={theme.palette.beta_text.medium_emphasis}
          />
        </Divider>
        <MediaContainer>
          <Box onClick={onClickGoogleCard} sx={{ cursor: "pointer" }}>
            <LogoTypography
              logo={GOOGLE}
              alt={LOGIN_CARD.googleAlt}
              label={LOGIN_CARD.googleLabel}
            />
          </Box>
          <LogoTypography
            logo={FACEBOOK}
            alt={LOGIN_CARD.facebookAlt}
            label={LOGIN_CARD.facebookLabel}
          />
          <LogoTypography
            logo={MICROSOFT}
            alt={LOGIN_CARD.microsoftAlt}
            label={LOGIN_CARD.microsoftLabel}
          />
        </MediaContainer>
        <NavgationContainer>
          <CustomTypography
            variant={"body1"}
            label={SIGNUP_ORG.footerContent}
            color={theme.palette.beta_text.medium_emphasis}
          />
          <CustomTypography
            variant={"body1"}
            label={"Login"}
            color={theme.palette.primary[500]}
            onClick={onClickLoginLink}
            sx={{ cursor: "pointer" }}
          />
        </NavgationContainer>
      </Layout>
    </Container>
  );
};

export default Signup;
