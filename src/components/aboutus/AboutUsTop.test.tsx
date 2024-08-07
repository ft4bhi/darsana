// AboutUsTop.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUsTop from './AboutUsTop';

describe('AboutUsTop', () => {
  test('renders the About Us section correctly', () => {
    render(<AboutUsTop />);
    
    // Check if the main heading is rendered
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
    
    // Check if the paragraph texts are rendered
    expect(screen.getByText('We are a global diaspora of more than thousand highly experienced')).toBeInTheDocument();
    expect(screen.getByText('and socially committed engineers. We work towards making a')).toBeInTheDocument();
    expect(screen.getByText('difference in the life of the needy and downtrodden.')).toBeInTheDocument();
  });
});
