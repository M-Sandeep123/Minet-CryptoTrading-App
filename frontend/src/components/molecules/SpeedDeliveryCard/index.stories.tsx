import SpeedDeliveryCard, { SpeedDeliveryCardProps } from ".";

import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Molecules/SpeedDeliveryCard",
  component: SpeedDeliveryCard,
} as Meta;

const Template: StoryFn<SpeedDeliveryCardProps> = (args) => (
  <SpeedDeliveryCard {...args} />
);

export const SpeedDelivery = Template.bind({});
SpeedDelivery.args = {
  initialValue: "2",
  options: [
    {
      value: "2",
      name: "Instant : ",
      time: "2-5 minutes",
      fees: "Delivery fees : 0.001 BTC",
    },
    {
      value: "4",
      name: "Faster : ",
      time: "4 hours",
      fees: "Delivery fees : 0.0001 BTC",
    },
    {
      value: "120",
      name: "Fast : ",
      time: "120 hours",
      fees: "Delivery fees : 0.00001 BTC",
    },
    {
      value: "0",
      name: "None",
      time: "",
      fees: "",
    },
  ],
};
