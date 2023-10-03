import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import PriceCorrelationCard, { PriceCorrelationCardProps } from "."; // Update the path
import { priceCorrelations } from "../../../constants";

export default {
  title: "Molecules/PriceCorrelationCard",
} as Meta<typeof priceCorrelations>;

const Template: StoryFn<PriceCorrelationCardProps> = (args) => (
  <PriceCorrelationCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  priceCorrelationsData: priceCorrelations,
};
