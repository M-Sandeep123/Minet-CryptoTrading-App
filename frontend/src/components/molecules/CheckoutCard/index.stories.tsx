import CheckoutPageCard, { CheckoutPageCardProps } from ".";
import theme from "../../../theme";
import usd from "../../../../public/assets/icons/usd.png";
import ethereum from "../../../../public/assets/images/ethereum.png";

import { Meta, StoryFn } from "@storybook/react";
import CustomTypography from "../../atoms/Typography";

export default {
  title: "Molecules/CheckoutPageCard",
  component: CheckoutPageCard,
} as Meta;

const Template: StoryFn<CheckoutPageCardProps> = (args) => (
  <CheckoutPageCard {...args} />
);

export const PaymentMethod = Template.bind({});
PaymentMethod.args = {
  src: usd,
  width: "32px",
  height: "32px",
  variant1: "caption1",
  label1: "USD Coin (Cash)",
  color1: theme.palette.beta_text.high_emphasis,
  typography2: (
    <CustomTypography
      variant="subtitle1"
      label="Total Balance - $34,000"
      color={theme.palette.beta_text.medium_emphasis}
    ></CustomTypography>
  ),
  variant: "caption1",
  label: "Default",
  color: theme.palette.beta_text.medium_emphasis,
};

export const Balance = Template.bind({});
Balance.args = {
  src: ethereum,
  width: "32px",
  height: "32px",
  variant1: "caption1",
  color1: theme.palette.beta_text.high_emphasis,
  label1: "Ethereum",
  variant: "subtitle1",
  label: "0.5234510 ETH",
  color: theme.palette.beta_text.high_emphasis,
};
