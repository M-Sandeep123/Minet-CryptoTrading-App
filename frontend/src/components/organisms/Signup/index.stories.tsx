import React from "react";
import { action } from "@storybook/addon-actions";
import Signup from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Organisms/Signup",
  component: Signup,
}as Meta<typeof Signup>;

const Template:StoryFn<typeof Signup> = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClickSignup: action("Signup clicked"),
  onClickGoogleCard: action("Google card clicked"),
  onClickLoginLink: action("Login link clicked"),
};
