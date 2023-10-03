import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ForgotPassword } from ".";

export default {
  title: "Organisms/ForgotPassword",
} as Meta<typeof ForgotPassword>;

const Template: StoryFn<typeof ForgotPassword> = (args) => <ForgotPassword {...args}/>;

export const ForgotPasswrd = Template.bind({});
ForgotPasswrd.args = {};