import React from "react";
import { Box, Paper, OutlinedInput } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import ButtonAtom from "../../atoms/Button";
import { ForgotPasswordConstants, LOG_IN } from "../../../constants";
import theme from "../../../theme";

const StyledPaper = styled(Paper)({
  width: "100%",
  height: "99.6%",
  padding: "96px 70px",
  gap: "64px",
  border: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledOuterBox = styled(Box)({
  width: "720px",
  height: "280px",
  padding: "0px, 32px, 0px, 32px",
  display: "flex",
  justifyContent: "center",
});

const StyledInnerBox = styled(Box)({
  width: "512px",
  height: "280px",
  gap: "19px",
  display: "flex",
  flexDirection: "column",
});

const StyledTypoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyleOutlineInput = styled(OutlinedInput)({
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  boxShadow: "none",
  width: "100%",
  height: "48px",
  "& input": {
    ...theme.typography.caption2,
  },
});

export interface ForgotPasswordProps {
  label: string;
  placeholder: string;
  buttonLabel: string;
  onClickForgot: () => void;
  isUserEmailValid?:boolean;
  onClickLogIn?:()=>void;
  handleDisable?:boolean
  onHandleTextFieldChange?:(e:any)=>void;
  inputValue?:string;
}

export const ForgotPassword = ({
  label,
  placeholder,
  buttonLabel,
  onClickForgot,
  isUserEmailValid,
  onClickLogIn,
  onHandleTextFieldChange,
  handleDisable,
  inputValue,
}: ForgotPasswordProps) => {

  return (
    <StyledPaper>
      <StyledOuterBox>
        <StyledInnerBox>
          <CustomTypography
            variant={"h4"}
            label={ForgotPasswordConstants.FORGOT_PASSWORD}
            data-testid="forgot-heading"
          />
          <CustomTypography
            variant={"caption1"}
            label={label}
            data-testid="forget-label"
          />
          <StyleOutlineInput
            data-testid="textfield"
            placeholder={placeholder}
            type={"text"}
            onChange={onHandleTextFieldChange}
            value={inputValue}
          />
          <ButtonAtom
            buttonVariant={"contained"}
            buttonLabel={buttonLabel}
            data-testid="buttonAtom"
            disabled={handleDisable}
            buttonColor="#FFFFFF"
            onClick={onClickForgot}
            sx={{
              width: "512px",
              height: "42px",
              borderRadius: "4px",
              padding: "0px 16px",
              gap: "10px",
            }}
          />
           {isUserEmailValid === false &&(
              <CustomTypography
                variant={"caption2"}
                label={ForgotPasswordConstants.ERROR_MESSAGE}
                color={"red"}
                data-testid="invalid-msg"
              />
            )}
          <StyledTypoBox>
            <CustomTypography
              variant={"caption2"}
              label={ForgotPasswordConstants.BACK_TO}
              sx={{
                color: `${theme.palette.gamma_grey[500]}`,
              }}
              data-testid="back-to-login"
            />
            <CustomTypography
              variant={"caption1"}
              label={ForgotPasswordConstants.LOG_IN}
              data-testid="login-link"
              sx={{
                color: `${theme.palette.primary[500]}`,
                cursor: "pointer",
                marginLeft: "4px",
              }}
              onClick={onClickLogIn}
            />
          </StyledTypoBox>
        </StyledInnerBox>
      </StyledOuterBox>
    </StyledPaper>
  );
};

export default ForgotPassword;
