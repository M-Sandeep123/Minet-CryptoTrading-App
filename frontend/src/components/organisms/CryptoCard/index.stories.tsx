import React from "react";
import { StoryFn } from "@storybook/react";
import CryptoCard from "../CryptoCard";

export default {
  title: "Organisms/ChooseCryptoCard",
};

const Template: StoryFn = (args) => <CryptoCard {...args} />;

export const ChooseCryptoCard = Template.bind({});
ChooseCryptoCard.args = {};
