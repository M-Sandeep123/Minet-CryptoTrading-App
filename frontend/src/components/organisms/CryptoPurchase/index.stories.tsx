import { Meta, StoryFn } from "@storybook/react";
import AmountDetail from ".";

export default {
  title: "organisms/Amount-details",
  component: AmountDetail,
} as Meta<typeof AmountDetail>;

const Template: StoryFn<typeof AmountDetail> = (args) => (
  <AmountDetail {...args} />
);
export const Bitcoin = Template.bind({});
Bitcoin.args = {
  isBuyButton:true,
  cryptoLabel: "BTC",
  accountBalance: 34000,
  cryptoPrice: 3406069.54,
};

export const Ethereum = Template.bind({});
Ethereum.args = {
  isBuyButton:false,
  cryptoLabel: "ETH",
  accountBalance: 34000,
  cryptoPrice: 3406069.54,
};
