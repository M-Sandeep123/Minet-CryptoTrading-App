import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ResetPassword from ".";

export default {
  title: "Organisms/ResetPassword",
} as Meta<typeof ResetPassword>;

const Template: StoryFn<typeof ResetPassword> = (args) => <ResetPassword {...args}/>;


export const ResetPasswords = Template.bind({});
ResetPasswords.args = {
  passwordMessage: false,
};

export const ResetPasswordSuccess = Template.bind({});
ResetPasswordSuccess.args = {
  passwordMessage: true,
};
