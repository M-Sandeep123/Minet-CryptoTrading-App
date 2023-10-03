import { Meta, StoryFn } from '@storybook/react';

import ImageAtom, { PropsTypes } from '.'; 
import bitCoinImg from "/public/assets/images/bitCoin.png";
import defaultPortfolioImage from "/public/assets/images/defaultPortfolioValue.png";
import defaultTransactionValue from "/public/assets/images/defaultTransactionsValue.png";

export default {
  title: 'Atoms/ImageAtom', 
  component: ImageAtom,
} as Meta;

const Template: StoryFn<PropsTypes> = (args) => <ImageAtom {...args} />;

export const BitCoinImage = Template.bind({});
BitCoinImage.args = {
  src: bitCoinImg,
  alt: 'BitCoin',
  width: '42px',
  height: '42px',
};

export const PortfolioImage = Template.bind({});
PortfolioImage.args = {
  src: defaultPortfolioImage,
  alt: 'Portfolio',
  width: '297px',
  height: '223px',
};

export const TransactionImage = Template.bind({});
TransactionImage.args = {
  src: defaultTransactionValue,
  alt: 'Transaction',
  width: '162px',
  height: '61px',
};
