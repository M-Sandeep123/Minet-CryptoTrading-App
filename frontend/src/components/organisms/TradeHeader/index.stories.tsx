import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TradeHeader, { ITradeCardProps } from "../TradeHeader"; 
import { ChooseCryptoCardConstants } from "../../../constants"; 
import bitcoin from "../../../../public/assets/images/bitCoin.png"

export default {
  title: "Organisms/TradeHeader",
} as Meta<typeof TradeHeader>;

const Template: StoryFn<ITradeCardProps> = (args) => <TradeHeader {...args} />;

export const TradeHeaderOrg = Template.bind({});
TradeHeaderOrg.args = {
  iconSrc: bitcoin,
  coinName: ChooseCryptoCardConstants.COINNAME,
  coinLabel: ChooseCryptoCardConstants.COINLABEL,
  coinValueChange: ChooseCryptoCardConstants.COINVALUE,
  marketCap: ChooseCryptoCardConstants.MARKETAMOUNT,
  volume: ChooseCryptoCardConstants.HOURSAMOUNT,
  supply: ChooseCryptoCardConstants.SUPPLYAMOUNT,
};

