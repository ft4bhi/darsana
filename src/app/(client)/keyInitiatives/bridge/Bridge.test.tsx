// BridgeKeyInviativites.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BridgeKeyInviativites from './page'; // Adjust the import path if needed

describe('BridgeKeyInviativites', () => {
  test('renders the title and content correctly', () => {
    render(<BridgeKeyInviativites />);

    // Check if the title is rendered
    expect(screen.getByText('Bridge')).toBeInTheDocument();

    // Check if specific paragraphs are rendered
    expect(screen.getByText(/Bridge is a program designed to offer academic support/)).toBeInTheDocument();
    expect(screen.getByText(/It has been decided to start a pilot program for the Bridge/)).toBeInTheDocument();
    expect(screen.getByText(/The initial plan was to start the programs for 2021-22 admissions/)).toBeInTheDocument();
    expect(screen.getByText(/The program was inaugurated by Principal Dr P. R. Suresh/)).toBeInTheDocument();
    expect(screen.getByText(/Subsequently, another batch for fresh 2021 admissions also was started/)).toBeInTheDocument();
    expect(screen.getByText(/The bridge committee includes people from Kochi, Thiruvananthapuram, Bangalore, and Palakkad chapters/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Bridge program key initiatives hero image')).toBeInTheDocument();
  });
});
