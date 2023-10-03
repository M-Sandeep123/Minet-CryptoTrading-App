import { useAuth0 } from "@auth0/auth0-react";
import { LogInTemplate } from "../../components/templates/LogInTemplate";
import login from "/public/assets/images/login.png";
import ImageAtom from "../../components/atoms/Image";
import LogIn from "../../components/organisms/LogIn";
import { useContext, useState } from "react";
import { getUserDetails, logIn } from "../../../utils/services";
import { Box, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext, UserType } from "../../store/user";

export const LogInPage = () => {
  const { updateUser } = useContext(UserContext);
  const [passwordError, setPasswordError] = useState<boolean>(true);
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleLogIn = (userDetails: any) => {
    let body = {
      email: userDetails.email,
      password: userDetails.password,
    };
    logIn(body).then((res) => {
      if (res.status == 200) {
        getUserDetails(body.email).then((response) => {
          updateUser({
            id: response.data.id,
            fullName: response.data.fullName,
            email: response.data.email,
            password: response.data.password,
            balance: response.data.balance,
          });
        });
        sessionStorage.setItem("email", userDetails.email);
        navigate("/dashboard");
      } else {
        setPasswordError(false);
      }
    });
  };
  const handleGoogleSignIn = () => {
    loginWithRedirect({
     authorizationParams: {
       connection: "google-oauth2"
     }
 })
 };

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleForgotPassword = (mail: any) => {
    getUserDetails(mail).then((res) => {
      if (res.status == 200) {
        navigate("/forgot-password");
      } else {
        setPasswordError(false);
      }
    });
  };
  return (
    <LogInTemplate
      image={<ImageAtom src={login} width="100%" height="99.6%" />}
      content={
        <StyleBox>
          <LogIn
            onClickSignIn={handleLogIn}
            isUserDataValid={passwordError}
            onClickGoogleCard={handleGoogleSignIn}
            onClickForgotPassword={handleForgotPassword}
            onClickSignUpLink={handleSignUp}
          />
        </StyleBox>
      }
    />
  );
};
const StyleBox = styled(Box)({
  paddingTop: "5%",
});
