import { render, screen } from '@testing-library/react';

import AvatarAtom from '.'; 
import AvatarImg from '/public/assets/images/avatar.png'; 

describe('AvatarAtom', () => {
  it('renders with src and alt', () => {
    render(<AvatarAtom src={AvatarImg} alt="Testuser" />);
    
    const avatarElement = screen.getByAltText('Testuser');
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', AvatarImg);
  });

  it('renders with children', () => {
    render(<AvatarAtom >TS</AvatarAtom>);
    
    const childrenElement = screen.getByText('TS');
    expect(childrenElement).toBeInTheDocument();
  });
});
