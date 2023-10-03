import UsdCard, { UsdCardProps } from ".";

import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Molecules/UsdCard",
  component: UsdCard,
} as Meta;

const Template: StoryFn<UsdCardProps> = (args) => <UsdCard {...args} />;

export const USDCoinCard = Template.bind({});
USDCoinCard.args = {
  disableButton: false,
};
