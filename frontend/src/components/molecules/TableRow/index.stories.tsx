import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions'; 

import { CustomTableRow, TableRowProps } from '.';
import bitCoinImg from "/public/assets/images/bitCoin.png";
import etheremImg from "/public/assets/images/ethereum.png";


export default {
  title: 'Molecules/CustomTableRow',
  component: CustomTableRow,
} as Meta;

const Template: StoryFn<TableRowProps> = (args) => (
  <CustomTableRow {...args} onClick={action('Row Clicked')} boxClick={action('Box Clicked')} />
);

export const BitCoin = Template.bind({});
BitCoin.args = {
  coinName: 'Bitcoin',
  coinSrc: bitCoinImg,
  coinCaption: 'BTC',
  coinPrice: 328553.73,
  coinChange: '+1.06%',
  coinMarketCap: '$60.1T',
  coinWatchListed: true,
};

export const Ethereum = Template.bind({});
Ethereum.args = {
  coinName: 'Ethereum 2',
  coinSrc: etheremImg,
  coinCaption: 'ETH2',
  coinPrice: 216678.10,
  coinChange: '-5.49%',
  coinMarketCap: '$25.4T',
  coinWatchListed: false,
};
