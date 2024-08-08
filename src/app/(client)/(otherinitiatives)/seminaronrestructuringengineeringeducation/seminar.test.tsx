// components/SeminarOnRestructuringOther.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SeminarOnRestructuringOther from './page'; // Adjust the import path if needed

describe('SeminarOnRestructuringOther', () => {
  test('renders the title and content correctly', () => {
    render(<SeminarOnRestructuringOther />);

    // Check if the title is rendered
    expect(screen.getByText('Seminar on restructuring Engineering education')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText('The seminar we conducted at Palakkad Fort Palace was a roaring success.')).toBeInTheDocument();
    expect(screen.getByText(/Participants from 15 colleges out of the 18 colleges under the University of Calicut attended/)).toBeInTheDocument();
    expect(screen.getByText(/The total number of participants was 118/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('')).toBeInTheDocument();
  });
});
