import { Meta, StoryFn } from "@storybook/react";
import PaymentTemplate from ".";

export default {
  title: "Templates/Payment-template",
  component: PaymentTemplate,
} as Meta<typeof PaymentTemplate>;

const Template: StoryFn<typeof PaymentTemplate> = (args) => (
  <PaymentTemplate {...args} />
);

export const OverView = Template.bind({});

