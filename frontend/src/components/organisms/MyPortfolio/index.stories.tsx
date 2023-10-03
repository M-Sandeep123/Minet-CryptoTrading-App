import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MyPortfolio } from ".";
import { TRADE_TABLE_DATA } from "../../../constants";

export default {
  title: "Organisms/Myportfolio",
} as Meta;

const Template: StoryFn = (args) => (
  <MyPortfolio portfolioData={TRADE_TABLE_DATA} totalbalance={1234.45} {...args} />
);

export const myPortfolio = Template.bind({});

