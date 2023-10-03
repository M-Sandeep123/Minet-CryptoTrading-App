import {
  FillLogInDependencies,
  FillLogInFormRobotEyes,
  FillLogInFormRobotHands,
} from "../robots/LoginMinet/login";
import {
  FillSignUpDependencies,
  FillSignUpFormRobotEyes,
  FillSignUpFormRobotHands,
} from "../robots/SignUpMinet/SignUp";
import {
  BuyCryptoRobotEyes,
  BuyCryptoRobotHands,
} from "../robots/BuyAndSellCrypto/buyCrypto";
import {
  SellCryptoRobotEyes,
  SellCryptoRobotHands,
} from "../robots/BuyAndSellCrypto/sellCrypto";
context("Checking the flow of the MinetApplication", () => {
  const signUpEyes = new FillSignUpFormRobotEyes();
  const signUpDependencies = new FillSignUpDependencies();
  const signUpHands = new FillSignUpFormRobotHands();
  const logInEyes = new FillLogInFormRobotEyes();
  const logInHands = new FillLogInFormRobotHands();
  const logInDependencies = new FillLogInDependencies();
  const buyCryptoEyes = new BuyCryptoRobotEyes();
  const buyCryptoHands = new BuyCryptoRobotHands();
  const sellCryptoEyes = new SellCryptoRobotEyes();
  const sellCryptoHands = new SellCryptoRobotHands();
  describe("Signing Up into the Application", () => {
    it("Signing Up into the application", () => {
      signUpDependencies.visitSignUpPage();
      signUpEyes.seesElementWithText("Signup with Minet");
      signUpHands.signUpEmail();
    });
  });
  describe("Login In Flow of Minet Application", () => {
    it("Existing User is logging into the account", () => {
      logInDependencies.visitLoginPage();
      logInEyes.seesElementWithText("Login to Minet");
      logInHands.logInEmail();
      buyCryptoEyes.seesElementWithText("Dashboard");
      buyCryptoHands.buyCryptoBitCoin();
      buyCryptoHands.buyCryptoEthereum();
      sellCryptoEyes.seesElementWithText("My portfolio");
      sellCryptoHands.sellCryptoBitCoin();
      sellCryptoHands.SellCryptoEthereum();
    });
  });
  describe("Forgot Password", () => {
    it("Updating Password of the User",()=>{
      logInDependencies.visitLoginPage();
      logInEyes.seesElementWithText("Login to Minet");
      logInHands.forgetPassword();
    })
  });
});
