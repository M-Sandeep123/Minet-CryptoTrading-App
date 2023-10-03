import { render, fireEvent } from '@testing-library/react';
import ChipAtom from '.';

describe('ChipAtom Component', () => {
  it('renders basic chip correctly', () => {
    const { getByText } = render(<ChipAtom label="XRP" />);
    const chipElement = getByText('XRP');
    expect(chipElement).toBeInTheDocument();
  });

  it('handles click event correctly', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ChipAtom label="BitCoin" onClick={handleClick} />);
    const chipElement = getByText('BitCoin');
    
    fireEvent.click(chipElement);
    expect(handleClick).toHaveBeenCalled();
  });

});
