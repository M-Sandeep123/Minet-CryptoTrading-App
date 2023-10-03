import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../Footer';
import { LABEL, CAREER, PRIVACY, COPYRIGHT, LANGUAGE, HELP } from '../../../constants';

describe('Footer component', () => {
    it('renders footer links', () => {
        render(<Footer />);

        expect(screen.getByText(LABEL)).toBeInTheDocument();
        expect(screen.getByText(CAREER)).toBeInTheDocument();
        expect(screen.getByText(PRIVACY)).toBeInTheDocument();
        expect(screen.getByText(COPYRIGHT)).toBeInTheDocument();
    });

    it('renders language and help buttons', () => {
        render(<Footer />);

        const languageButton = screen.getByRole('button', { name: LANGUAGE });
        const helpButton = screen.getByRole('button', { name: HELP });

        expect(languageButton).toBeInTheDocument();
        expect(helpButton).toBeInTheDocument();
    });
     it("renders language and help buttons", () => {
       render(<Footer />);

       const languageButton = screen.getByRole("button", { name: LANGUAGE });
       const helpButton = screen.getByRole("button", { name: HELP });

       expect(languageButton).toBeInTheDocument();
       expect(helpButton).toBeInTheDocument();
     });

     
});