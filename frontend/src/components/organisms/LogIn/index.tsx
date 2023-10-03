import { Box, Divider, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import ButtonAtom from "../../atoms/Button";
import theme from "../../../theme";
import LogoTypography from "../../molecules/MediaLoginCard";
import GOOGLE from "../../../../public/assets/images/google.png";
import FACEBOOK from "../../../../public/assets/images/facebook.png";
import MICROSOFT from "../../../../public/assets/images/microsoft.png";
import { EMAIL_REGEX, LOGIN_CARD, LOG_IN } from "../../../constants";
import { useState } from "react";
import {
  Container,
  InnerField,
  Layout,
  NavgationContainer,
  StyledTextField,
  TextFieldsLayout,
} from "../Signup";

interface UserData {
  email: string;
  password: string;
}

interface PropsTypes {
  onClickSignIn: (userData: UserData) => void;
  onClickGoogleCard?: () => void;
  onClickSignUpLink?: () => void;
  onClickForgotPassword: (mail: string) => void;
  isUserDataValid?: boolean;
}
const MediaContainers = styled(Box)({
  display: "flex",
  gap: "20px",
});
const LogIn = ({
  onClickGoogleCard,
  onClickSignIn,
  onClickSignUpLink,
  onClickForgotPassword,
  isUserDataValid,
}: PropsTypes) => {
  const [mail, setMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleOnChangeEmail = (e: any) => {
    setMail(e.target.value);
  };
  const handleOnChangePassword = (e: any) => {
    setUserPassword(e.target.value);
  };
  const handleOnClickSignIn = () => {
    const userData = {
      email: mail,
      password: userPassword,
    };
    onClickSignIn(userData);
  };

  const handleClickForgotPassword = (e: any) => {
    onClickForgotPassword(mail);
  };
  const isEmailValid = (email: string): boolean => {
    return EMAIL_REGEX.test(email) && email.indexOf("@@") === -1;
  };
  const isFormValid = (): boolean => {
    return isEmailValid(mail) && userPassword !== "";
  };
  return (
    <Container>
      <Layout>
        <CustomTypography variant={"h4"} label={LOG_IN.header} />
        <TextFieldsLayout>
          <InnerField>
            <CustomTypography variant={"caption1"} label={LOG_IN.emailLabel} />
            <StyledTextField
              isTwoIconRequired={false}
              isIconRequired={false}
              placeholder={LOG_IN.emailPlaceholder}
              isPasswordIconRequired={false}
              label={""}
              onChange={handleOnChangeEmail}
            />
            {!isEmailValid(mail) && mail !== "" && (
              <CustomTypography
                variant={"caption2"}
                label={LOG_IN.emailAlertMsg}
                color={"red"}
                data-testid="email-msg"
              />
            )}
          </InnerField>

          <InnerField>
            <CustomTypography
              variant={"caption1"}
              label={LOG_IN.passwordLabel}
            />
            <StyledTextField
              isTwoIconRequired={false}
              isIconRequired={false}
              placeholder={LOG_IN.passwordPlaceholder}
              isPasswordIconRequired={true}
              label={""}
              onChange={handleOnChangePassword}
            />
          </InnerField>
          <CustomTypography
            variant={"body2"}
            label={LOG_IN.forgotPassword}
            color={theme.palette.primary[500]}
            onClick={handleClickForgotPassword}
          />
          <ButtonAtom
            buttonVariant={"contained"}
            buttonLabel={LOG_IN.buttonLabel}
            buttonBorderRadius="4"
            buttonHeight={42}
            disabled={!isFormValid()}
            onClick={handleOnClickSignIn}
            data-testid="signup-button"
            sx={{ textTransform: "none", cursor: "pointer" }}
          />
          {isUserDataValid === false && (
            <CustomTypography
              variant={"caption2"}
              label={LOG_IN.invalidDetails}
              color={"red"}
              data-testid="invalid-msg"
            />
          )}
        </TextFieldsLayout>
        <Divider>
          <CustomTypography
            variant={"caption1"}
            label={"Or"}
            color={theme.palette.beta_text.medium_emphasis}
          />
        </Divider>
        <MediaContainers>
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
        </MediaContainers>
        <NavgationContainer>
          <CustomTypography
            variant={"body1"}
            label={LOG_IN.footerContent}
            color={theme.palette.beta_text.medium_emphasis}
          />
          <CustomTypography
            variant={"body1"}
            label={"Signup"}
            color={theme.palette.primary[500]}
            onClick={onClickSignUpLink}
            sx={{ cursor: "pointer" }}
          />
        </NavgationContainer>
      </Layout>
    </Container>
  );
};

export default LogIn;
