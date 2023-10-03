import styled from "@emotion/styled";
import { Box, FormControl, FormHelperText } from "@mui/material";
import { useState } from "react";
import CustomTypography from "../../atoms/Typography";
import {
  LOG_IN,
  PASSWORD_CHARACTER_REGEX,
  ResetPasswordConstants,
} from "../../../constants";
import CustomizedInputBase from "../../atoms/TextField";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import TypographyWithIcon from "../../molecules/TypographyWithIcon";
import tick from "../../../../public/assets/icons/tick.svg";

const StylePaper = styled(Box)({
  width: "720px",
  height: "768px",
  padding: "96px 0px 96px 0px",
  gap: "64px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledOuterBox = styled(Box)({
  width: "720px",
  height: "364px",
  padding: "0px, 32px, 0px, 32px",
  display: "flex",
  justifyContent: "center",
});

const StyledInnerBox = styled(Box)({
  width: "512px",
  height: "364px",
  gap: "32px",
  display: "flex",
  flexDirection: "column",
});

const StyledPasswordBox = styled(Box)({
  width: "512px",
  height: "74px",
  gap: "6px",
  display: "flex",
  flexDirection: "column",
});

const StyledSuccessPasswordBox = styled(Box)({
  width: "460px",
  height: "54px",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #E8E8F7",
  backgroundColor: theme.palette.primary[100],
});

const StyledButton = styled(ButtonAtom)({
  width: "512px",
  height: "42px",
  borderRadius: "4px",
  padding: "0px 16px",
  gap: "10px",
});

const StyledCustomInputBase = styled(CustomizedInputBase)({
  "& input": {
    ...theme.typography.caption2,
  },
});
interface PasswordErrors {
  password?: string;
  confirmPassword?: string;
}

interface ResetPasswordProps {
  onClickReset: (password: any) => void;
  onClickLogin: () => void;
  passwordMessage: boolean;
  validPassword?: boolean;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  onClickReset,
  onClickLogin,
  passwordMessage,
  validPassword,
  ...props
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<PasswordErrors>({});

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };
  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(newConfirmPassword);
  };
  const validatePassword = (value: string) => {
    const errors: PasswordErrors = {};

    if (value.length < 8) {
      errors.password = ResetPasswordConstants.ERROR_LENGTH;
    } else if (!/\d/.test(value)) {
      errors.password = ResetPasswordConstants.ERROR_DIGIT;
    } else if (!PASSWORD_CHARACTER_REGEX.test(value)) {
      errors.password = ResetPasswordConstants.ERROR_CHARACTER;
    } else {
      errors.password = "";
    }
    setPasswordErrors((prevErrors) => ({ ...prevErrors, ...errors }));
  };

  const validateConfirmPassword = (value: string) => {
    const errors: PasswordErrors = {};

    if (value !== password) {
      errors.confirmPassword = ResetPasswordConstants.ERROR_MISMATCH;
    } else {
      errors.confirmPassword = "";
    }

    setPasswordErrors((prevErrors) => ({ ...prevErrors, ...errors }));
  };

  const isButtonDisabled = () => {
    if (confirmPassword.length === 0 && password.length === 0) {
      return false;
    } else if (password.length > 0 && confirmPassword.length > 0) {
      if (confirmPassword === password) {
        return true;
      }
    }
  };

  const handleClickReset = () => {
    onClickReset(password);
  };
  return (
    <StylePaper>
      <StyledOuterBox>
        <StyledInnerBox>
          <CustomTypography
            variant={"h4"}
            label={ResetPasswordConstants.RESET_PASSWORD}
            data-testid="reset-heading"
          />
          {passwordMessage ? (
            <>
              <StyledSuccessPasswordBox>
                <TypographyWithIcon
                  src={tick}
                  width={"32px"}
                  height={"32px"}
                  variant1={"body1"}
                  label1={"Password reset successful"}
                  color1={theme.palette.beta_text.high_emphasis}
                  typography2={
                    <CustomTypography
                      variant={"body2"}
                      label={"Click on button below to proceed to login"}
                      color={theme.palette.beta_text.medium_emphasis}
                    />
                  }
                />
              </StyledSuccessPasswordBox>
              <StyledButton
                buttonVariant={"contained"}
                buttonLabel={ResetPasswordConstants.LOG_IN}
                buttonColor="#FFFFFF"
                onClick={onClickLogin}
                data-testid="login-button"
              />
            </>
          ) : (
            <>
              <StyledPasswordBox>
                <CustomTypography
                  variant={"caption1"}
                  label={ResetPasswordConstants.PASSWORD_HEADING}
                  data-testid="reset-heading-1"
                />
                <FormControl error={!!passwordErrors.password}>
                  <StyledCustomInputBase
                    isTwoIconRequired={false}
                    isIconRequired={false}
                    placeholder={ResetPasswordConstants.PASSWORD_PLACEHOLDER}
                    isPasswordIconRequired={true}
                    label={""}
                    data-testid="textfield-1"
                    onChange={handleChangePassword}
                    value={password}
                  />
                  <FormHelperText error>
                    {passwordErrors.password}
                  </FormHelperText>
                </FormControl>
              </StyledPasswordBox>
              <StyledPasswordBox>
                <CustomTypography
                  variant={"caption1"}
                  label={ResetPasswordConstants.RE_ENTER_PASSWORD}
                  data-testid="reset-heading-2"
                />
                <FormControl error={!!passwordErrors.confirmPassword}>
                  <StyledCustomInputBase
                    isTwoIconRequired={false}
                    isIconRequired={false}
                    placeholder={
                      ResetPasswordConstants.RE_ENTER_PASSWORD_PLACEHOLDER
                    }
                    isPasswordIconRequired={true}
                    label={""}
                    data-testid="textfield-2"
                    onChange={handleChangeConfirmPassword}
                    error={!!passwordErrors.confirmPassword}
                    value={confirmPassword}
                  />
                  <FormHelperText error>
                    {passwordErrors.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </StyledPasswordBox>

              {validPassword === false && (
                <CustomTypography
                  variant={"caption2"}
                  label={LOG_IN.samePassword}
                  color={"red"}
                  data-testid="invalid-msg"
                />
              )}
              <CustomTypography
                variant={"caption2"}
                label={ResetPasswordConstants.HELPER_TEXT}
                color={theme.palette.beta_text.light_emphasis}
                data-testid="help-text"
              />
              <StyledButton
                buttonVariant={"contained"}
                buttonLabel={ResetPasswordConstants.SEND_LINK}
                disabled={!isButtonDisabled()}
                buttonColor="#FFFFFF"
                onClick={handleClickReset}
                data-testid="send-button"
              />
            </>
          )}
        </StyledInnerBox>
      </StyledOuterBox>
    </StylePaper>
  );
};

export default ResetPassword;
