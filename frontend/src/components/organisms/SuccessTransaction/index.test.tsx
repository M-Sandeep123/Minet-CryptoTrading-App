import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SuccessTransaction } from '.';
import { SUCCESS_TRANSACTION } from '../../../constants';

describe('SuccessTransaction component', () => {
  const onClickCryptoMock = jest.fn();
  const onClickUsdMock = jest.fn();

  const propsBuyTrue = {
    isTransactionBuy: true,
    quantity: '0.02345',
    currency: 'BTC',
    onClickCrypto: onClickCryptoMock,
    onClickUSD: onClickUsdMock,
  };

  const propsBuyFalse = {
    isTransactionBuy: false,
    quantity: '0.2341',
    currency: 'ETH',
    onClickCrypto: onClickCryptoMock,
    onClickUSD: onClickUsdMock,
  };

  it('should calls onClickCrypto when Buy Crypto button is clicked for buy=true', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyTrue} />);
    
    fireEvent.click(getByText(SUCCESS_TRANSACTION.buyButtonLabel));
    expect(onClickCryptoMock).toHaveBeenCalledTimes(1);
  });

  it('should calls onClickUSD when Go to USD Coin button is clicked for buy=true', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyTrue} />);
    
    fireEvent.click(getByText(SUCCESS_TRANSACTION.UsdButtonLabel));
    expect(onClickUsdMock).toHaveBeenCalledTimes(1);
  });

  it('should renders component with correct information for buy=false', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyFalse} />);
    
    expect(getByText(SUCCESS_TRANSACTION.sellDescription)).toBeInTheDocument();
    expect(getByText(SUCCESS_TRANSACTION.sellButtonLabel)).toBeInTheDocument();
    expect(getByText(SUCCESS_TRANSACTION.UsdButtonLabel)).toBeInTheDocument();
  });
  it('should renders component with correct information for buy=true', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyTrue} />);
    
    expect(getByText(SUCCESS_TRANSACTION.buyDescription)).toBeInTheDocument();
    expect(getByText(SUCCESS_TRANSACTION.buyButtonLabel)).toBeInTheDocument();
    expect(getByText(SUCCESS_TRANSACTION.UsdButtonLabel)).toBeInTheDocument();
  });
  it('should calls onClickCrypto when Buy Crypto button is clicked for buy=false', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyFalse} />);
    
    fireEvent.click(getByText(SUCCESS_TRANSACTION.sellButtonLabel));
    expect(onClickCryptoMock).toHaveBeenCalledTimes(1);
  });

  it('should calls onClickUSD when Go to USD Coin button is clicked for buy=false', () => {
    const { getByText } = render(<SuccessTransaction {...propsBuyFalse} />);
    
    fireEvent.click(getByText(SUCCESS_TRANSACTION.UsdButtonLabel));
    expect(onClickUsdMock).toHaveBeenCalledTimes(1);
  });
});
