import React from "react";
import { Meta, StoryFn, } from "@storybook/react";
import { SuccessTransaction } from ".";
import { action } from "@storybook/addon-actions";

const quantity="0.0234510";
const currency="BTC";
export default {
  title: "organisms/SuccessTransaction",
  component: SuccessTransaction
}as Meta<typeof SuccessTransaction>

const Template: StoryFn<typeof SuccessTransaction> = (args) => (<SuccessTransaction {...args}/>)

export const Buy = Template.bind({});
Buy.args = {
  quantity:quantity,
  currency:currency,
  isTransactionBuy:true,
  onClickCrypto:action("Buy Cryto clicked"),
  onClickUSD:action("USD clicked")
}
export const Sell = Template.bind({});
Sell.args = {
  quantity:quantity,
  currency:currency,
  isTransactionBuy:false,
  onClickCrypto:action("Buy Cryto clicked"),
  onClickUSD:action("USD clicked")
}
