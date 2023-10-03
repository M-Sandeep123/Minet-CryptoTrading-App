import WatchlistCard from ".";

import theme from "../../../theme";

import bitCoin from "../../../../public/assets/images/bitCoin.png";

import arrowUpRight from "../../../../public/assets/icons/arrowUpRight.svg";

import { Meta, StoryFn } from "@storybook/react";
import { graphData } from "../../../constants";

export default {
  title: "Molecules/WatchlistCard",
  component: WatchlistCard,
} as Meta;

const Template: StoryFn<typeof WatchlistCard> = (args) => (
  <WatchlistCard {...args} />
);

export const BitcoinCard = Template.bind({});

BitcoinCard.args = {
  src: bitCoin,
  width: "42px",
  height: "42px",
  variant1: "body1",
  color1: theme.palette.beta_text.high_emphasis,
  label1: "Bitcoin",
  variant: "body1",
  label: "$3,00,439.93",
  color: theme.palette.beta_text.high_emphasis,
  graphVariant: "overline",
  graphLabel: "+1.2%",
  graphColor: theme.palette.gamma_success[500],
  iconSrc: arrowUpRight,
  graphData: graphData[0].graphData,
};
