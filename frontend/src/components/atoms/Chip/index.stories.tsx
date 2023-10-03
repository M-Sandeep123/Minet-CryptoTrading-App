import { Meta, StoryFn } from '@storybook/react';

import ChipAtom from '.'; 
import { ChipProps } from '@mui/material';
import theme from '../../../theme';

export default {
  title: 'Atoms/ChipAtom',
  component: ChipAtom,
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <ChipAtom {...args} />;

export const BasicChip = Template.bind({});
BasicChip.args = {
  label: 'XRP',
  style:{borderRadius: "4px",
  background: "rgba(34, 34, 34, 0.20)",
  ...theme.typography.body2,
   color:theme.palette.beta_text.high_emphasis}
};

export const BitCoinChip = Template.bind({});
BitCoinChip.args = {
  label: 'BitCoin',
  onClick: () => console.log('Chip clicked'),
  style:{borderRadius: "4px",
  border: "2px solid #F7931A",
  backgroundColor: "rgba(247, 147, 26, 0.20)",
  ...theme.typography.body2,
  color:theme.palette.beta_text.high_emphasis},
};
