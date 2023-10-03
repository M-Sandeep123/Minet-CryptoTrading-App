import { useState } from "react";
import { LogInTemplate } from "../../components/templates/LogInTemplate";
import login from "/public/assets/images/login.png";
import ImageAtom from "../../components/atoms/Image";
import ForgotPassword from "../../components/organisms/ForgotPassword";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { ForgotPasswordConstants } from "../../constants";
import { getUserDetails, patchPassword } from "../../../utils/services";
import { useNavigate } from "react-router";
import ResetPassword from "../../components/organisms/ResetPassword";

const StyleBox = styled(Box)({
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ForgotPage = () => {
  const [userEmailValid, setUserEmailValid] = useState<boolean>(true);
  const [currentState, setCurrentState] = useState<number>(0);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [passwordmessage, setPasswordMessage] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const handleResetEmail = (e: any) => {
    const mail = e.target.value;
    if (mail.length !== 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
    setEmail(mail);
    setDisplayValue(e.target.value);
  };

  const handleResetValue = (e: any) => {
    const reset = e.target.value;
    const regex = /^[0-9]{8}$/;
    if (regex.test(reset)) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
    setResetCode(resetCode);
    setDisplayValue(e.target.value);
  };

  const handleResetCode = () => {
    setCurrentState(2);
  };

  const handleResetLink = () => {
    getUserDetails(email).then((res) => {
      if (res.status == 200) {
        setCurrentState(1);
        setDisplayValue("");
        setButtonDisable(true);
      } else {
        setUserEmailValid(false);
      }
    });
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleResetPassword = (newpassword: any) => {
    getUserDetails(email).then(async (res) => {
      if (res.status == 200) {
        const content = {
          id: res.data.id,
          password: newpassword,
        };
        try {
          await patchPassword(content);
          setPasswordMessage(true);
        } catch {
          setIsPasswordValid(false);
          console.error("error occurred");
        }
      } else {
        console.error("error occurred");
      }
    });
  };
  let content;
  switch (currentState) {
    case 0:
      content = (
        <ForgotPassword
          isUserEmailValid={userEmailValid}
          label={ForgotPasswordConstants.EMAIL}
          placeholder={ForgotPasswordConstants.EMAIL_ID}
          buttonLabel={ForgotPasswordConstants.SEND_LINK}
          onHandleTextFieldChange={handleResetEmail}
          onClickLogIn={handleLogIn}
          handleDisable={buttonDisable}
          onClickForgot={handleResetLink}
          inputValue={displayValue}
        />
      );
      break;
    case 1:
      content = (
        <ForgotPassword
          label={ForgotPasswordConstants.RESETCODE}
          placeholder={ForgotPasswordConstants.PLACEHOLDER_VALUE}
          buttonLabel={ForgotPasswordConstants.RESET_PASSWORD}
          onClickLogIn={handleLogIn}
          onClickForgot={handleResetCode}
          handleDisable={buttonDisable}
          onHandleTextFieldChange={handleResetValue}
          inputValue={displayValue}
        />
      );
      break;
    case 2:
      content = (
        <Stack direction="column">
          <ResetPassword
            onClickReset={handleResetPassword}
            onClickLogin={handleLogIn}
            passwordMessage={passwordmessage}
            validPassword={isPasswordValid}
          />
        </Stack>
      );
      break;
    default:
      content = null;
  }

  return (
    <LogInTemplate
      image={<ImageAtom src={login} width="100%" height="99.6%" />}
      content={<StyleBox>{content}</StyleBox>}
    />
  );
};

export default ForgotPage;
