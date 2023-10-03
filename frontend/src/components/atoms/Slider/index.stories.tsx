import React from "react";
import Slider from ".";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "atoms/slider",
  component: Slider,
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  getSlideValue: action("Slider value changed"),
};

export const Disabled = Template.bind({});
Disabled.args = {
  getSlideValue: action("Slider value changed"),
  disabled: true,
};
