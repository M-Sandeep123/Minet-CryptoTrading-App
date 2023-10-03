import { Meta, StoryFn } from "@storybook/react";
import LogoTypography from ".";
import GOOGLE from "../../../../public/assets/images/google.png";
import FACEBOOK from "../../../../public/assets/images/facebook.png";
import MICROSOFT from "../../../../public/assets/images/microsoft.png";
import { LOGIN_CARD } from "../../../constants";

export default {
  title: "molecules/logo-typography",
  component: LogoTypography,
} as Meta<typeof LogoTypography>;

const Template: StoryFn<typeof LogoTypography> = (args) => (
  <LogoTypography {...args} />
);

export const LoginWithGoogle = Template.bind({});
LoginWithGoogle.args = {
  logo: GOOGLE,
  alt: LOGIN_CARD.googleAlt,
  label: LOGIN_CARD.googleLabel,
};

export const LoginWithFacebook = Template.bind({});
LoginWithFacebook.args = {
  logo: FACEBOOK,
  alt: LOGIN_CARD.facebookAlt,
  label: LOGIN_CARD.facebookLabel,
};

export const LoginWithMicrosoft = Template.bind({});
LoginWithMicrosoft.args = {
  logo: MICROSOFT,
  alt:LOGIN_CARD.microsoftAlt,
  label: LOGIN_CARD.microsoftLabel,
};
