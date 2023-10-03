import { Meta, StoryFn } from "@storybook/react";
import Header from ".";

export default {
  title: "Organisms/Header",
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: "Dashboard",
  isButtonRequired: true,
  isSellButtonDisabled: true,
  isBuyButtonDisabled: true,
};

export const CheckoutHeader = Template.bind({});
CheckoutHeader.args = {
  title: "Checkout",
  isButtonRequired: false,
};
