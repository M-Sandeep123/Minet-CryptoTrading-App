
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LogInTemplate } from '.';

describe('LogIn Template',()=>{
    it('should render content provided to image and content',()=>{
        render(<LogInTemplate
        image={<h1>Image</h1>}
        content={<h4>Content</h4>}
        />);
        expect(screen.getByText("Image")).toBeInTheDocument();
        expect(screen.getByText("Content")).toBeInTheDocument();
    })
})
