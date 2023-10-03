import TypographyWithIcon, { TypographyWithIconProps } from ".";
import theme from "../../../theme";
import bitcoins from "../../../../public/assets/icons/bitcoins.svg";
import usd from "../../../../public/assets/icons/usd.png";
import ethereum from "../../../../public/assets/images/ethereum.png";

import { Meta, StoryFn } from "@storybook/react";
import CustomTypography from "../../atoms/Typography";

export default {
  title: "Molecules/TypographyWithIcon",
  component: TypographyWithIcon,
} as Meta;

const Template: StoryFn<TypographyWithIconProps> = (args) => (
  <TypographyWithIcon {...args} />
);

export const Payment = Template.bind({});
Payment.args = {
  src: bitcoins,
  width: "42px",
  height: "42px",
  variant1: "caption2",
  color1: theme.palette.beta_text.medium_emphasis,
  label1: "Paying through",
  typography2: (
    <CustomTypography
      variant="body1"
      label="Bitcoin wallet"
      color={theme.palette.beta_text.high_emphasis}
    />
  ),
};

export const USDCoin = Template.bind({});
USDCoin.args = {
  src: usd,
  width: "56px",
  height: "56px",
  variant1: "h6",
  color1: theme.palette.gamma_grey[500],
  label1: "USD Coin",
  typography2: (
    <CustomTypography
      variant="body2"
      label="Cash"
      color={theme.palette.gamma_grey[500]}
    />
  ),
};

export const Ethereum = Template.bind({});
Ethereum.args = {
  src: ethereum,
  width: "32px",
  height: "32px",
  variant1: "caption1",
  color1: theme.palette.beta_text.high_emphasis,
  label1: "Ethereum",
};
