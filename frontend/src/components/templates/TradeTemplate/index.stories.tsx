import { Meta, StoryFn } from "@storybook/react";
import TradeTemplate from ".";
import { SuccessTransaction } from "../../organisms/SuccessTransaction";

export default {
  title: "Templates/TradeTemplate",
} as Meta<typeof TradeTemplate>;

const Template: StoryFn<typeof TradeTemplate> = (args) => (
  <TradeTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Trade",
  isButtonRequired: true,
  isBuyButtonDisabled: true,
  isSellButtonDisabled: true,
  onClickAvatarIcon: () => {
    console.log("Clicked");
  },
  content: <SuccessTransaction />,
};
