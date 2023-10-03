import React from "react";
import { action } from "@storybook/addon-actions";
import Signup from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Organisms/LogIn",
  component: Signup,
}as Meta<typeof Signup>;

const Template:StoryFn<typeof Signup> = (args) => <Signup {...args} />;

export const LogIn = Template.bind({});
LogIn.args = {
  onClickSignIn: action("SignIn clicked"),
  onClickGoogleCard: action("Google card clicked"),
  onClickForgotPassword: action("Forgot Password clicked"),
  onClickSignUpLink:action("SignUp clicked"),
};
