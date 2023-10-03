import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TransactionTableRow from ".";

export default {
  title: "molecules/TransactionTableRow",
  component: TransactionTableRow,
} as Meta;

const Template: StoryFn<typeof TransactionTableRow> = (args) => (<TransactionTableRow {...args} />);
export const Default = Template.bind({});
Default.args = {
  date: new Date(), 
  transactionCryptoName: "Bitcoin",
  otherUser: "Teja Mannikanti",
  quantity: "+0.0010 BTC", 
  transactionType: "Purchase",
  availableBalance: "+$900",
};
