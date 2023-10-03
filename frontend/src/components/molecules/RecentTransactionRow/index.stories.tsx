import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RecentTransactionRow from ".";

export default {
  title: "molecules/RecentTransactionRow",
  component: RecentTransactionRow,
} as Meta<typeof RecentTransactionRow>;

const Template: StoryFn<typeof RecentTransactionRow> = (args) => (
  <RecentTransactionRow {...args} />
);
export const Default = Template.bind({});
Default.args = {
  transactionDate: new Date(),
  cryptoName: "Bitcoin",
  cryptoQuantity: "-0.0234510 BTC",
  transactionType: "Sold",
  currentBalance: "+ $34000.00",
};
