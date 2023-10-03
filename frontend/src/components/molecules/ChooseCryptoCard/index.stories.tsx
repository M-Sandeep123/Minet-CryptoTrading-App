import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { cryptoCardData } from "../../../constants"; 
import ChooseCryptoCard from ".";

export default {
  title: "Molecules/ChooseCryptoCard",
} as Meta<typeof ChooseCryptoCard>;

const Template: StoryFn<typeof ChooseCryptoCard> = (args) => <ChooseCryptoCard {...args} />;

export const WithSelected = Template.bind({});
WithSelected.args = {
  cryptoCardSrc: cryptoCardData.cryptoSrc,
  cryptoCardLabel: cryptoCardData.cryptoLabel,
  cryptoCardDescription: cryptoCardData.cryptoDescription,
  cryptoCardSelected: true,
};

export const WithoutSelected = Template.bind({});
WithoutSelected.args = {
  cryptoCardSrc: cryptoCardData.cryptoSrc,
  cryptoCardLabel: cryptoCardData.cryptoLabel,
  cryptoCardDescription: cryptoCardData.cryptoDescription,
  cryptoCardSelected: false,
};
