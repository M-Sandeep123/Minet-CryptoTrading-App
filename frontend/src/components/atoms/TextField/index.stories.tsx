import { Meta, StoryFn } from "@storybook/react";

import CustomizedInputBase, { InputBaseProps } from ".";

export default {
  title: "Atoms/TextField",
  component: CustomizedInputBase,
} as Meta;

const Template: StoryFn<InputBaseProps> = (args) => (
  <CustomizedInputBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "you@example.com",
};

export const WithShowPassword = Template.bind({});
WithShowPassword.args = {
  placeholder: "Password",
  isPasswordIconRequired: true,
};

export const WithOneIcon = Template.bind({});
WithOneIcon.args = {
  placeholder: "Search all assets",
  isIconRequired: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  placeholder: "Search all assets",
  isTwoIconRequired: true,
};
