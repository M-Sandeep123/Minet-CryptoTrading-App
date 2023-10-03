import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MyWallet from "../MyWallet";
import { TransactionData } from "../../../constants";

const usdCurrenyValue = "$1,234.56";

export default {
  title: "organisms/MyWallet",
  component: MyWallet,
} as Meta<typeof MyWallet>;

const Template: StoryFn<typeof MyWallet> = (args) => <MyWallet {...args} />;

export const Wallet = Template.bind({});
Wallet.args = {
  usdCurrenyValue: usdCurrenyValue,
  transactiondata: TransactionData,
  image:true,
};
