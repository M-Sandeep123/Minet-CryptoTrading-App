import { StoryFn } from "@storybook/react";
import BuyNowCard, { BuyNowCardProps } from "./"; 

export default {
  title: "Organisms/BuyNowCard",
  component: BuyNowCard,
};

const Template: StoryFn<BuyNowCardProps> = (args) => <BuyNowCard {...args} />;

export const Buy = Template.bind({});
Buy.args = {
  isBuying:true,
  coinQty: "0.5234510 ETH",
  coinValue: "1ETH = $1,297.93",
  paymentMethod: "Visa credit ...8845",
  deliveryFees: "0.005 ETH",
  depositTo: "Etherium wallet",
  priceOfQty: "$648.54",
  transactionFee: "$30.00",
  total: "$678.54",
  buttonLabel: "Buy Now",
};

export const Sell = Template.bind({});
Sell.args = {
  isBuying:false,
  coinQty: "0.5234510 ETH",
  coinValue: "1ETH = $1,297.93",
  paymentMethod: "Bitcoin wallet",
  deliveryFees: "0.005 ETH",
  depositTo: "Rupee Coin",
  priceOfQty: "$648.54",
  transactionFee: "$30.00",
  total: "$678.54",
  buttonLabel: "Sell Now",
};
