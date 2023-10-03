import { StoryFn, Meta } from "@storybook/react";
import ButtonAtom, { ButtonAtomProps } from ".";

export default {
  title: "Atoms/Button",
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonAtomProps> = (args) => <ButtonAtom {...args} />;

export const Buy = Template.bind({});
Buy.args = {
  buttonVariant: "contained",
  buttonWidth: 120,
  buttonHeight: 42,
  buttonLabel: "BUY",
  sx: { variant: "body1", fontWeight: "bold" },
  buttonColor: "#FFFFFF",
  buttonBgColor: "#0052FF",
  buttonBorder: "1px",
  buttonBorderRadius: "4px",
};

export const Sell = Template.bind({});
Sell.args = {
  buttonVariant: "contained",
  buttonWidth: 120,
  buttonHeight: 42,
  buttonLabel: "SELL",
  sx: { variant: "body1", fontWeight: "bold" },
  buttonColor: "#FFFFFF",
  buttonBgColor: "#FFA74F",
  buttonBorder: "1px",
  buttonBorderRadius: "4px",
};

export const Help = Template.bind({});
Help.args = {
  buttonVariant: "outlined",
  buttonWidth: 120,
  buttonHeight: 42,
  buttonLabel: "NEED HELP",
  sx: { variant: "body1", fontWeight: "bold" },
  buttonColor: "#0052FF",
  buttonBgColor: "#FFFFFF",
  buttonBorder: "1px solid #0052FF",
  buttonBorderRadius: "4px",
};
