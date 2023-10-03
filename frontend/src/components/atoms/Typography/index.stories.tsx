import type { Meta, StoryObj } from "@storybook/react";
import CustomTypography from ".";
import theme from "../../../theme";

const meta = {
  title: "Atoms/Typography",
  component: CustomTypography,
  tags: ["autodocs"],
} satisfies Meta<typeof CustomTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyWithH4: Story = {
  args: {
    variant: "h4",
    label: "Login to Minet",
  },
};

export const TypographyWithBody2: Story = {
  args: {
    variant: "body2",
    color: `${theme.palette.beta_text.high_emphasis}`,
    label: "Dashboard",
  },
};

export const TypographyWithCaption2: Story = {
  args: {
    variant: "caption2",
    label: "My portfolio",
  },
};
