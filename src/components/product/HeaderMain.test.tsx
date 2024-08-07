// HeaderMain.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderMain from './HeaderMain'; // Adjust the import path if needed

describe('HeaderMain', () => {
  test('renders the search input and button', () => {
    render(<HeaderMain />);

    // Check if the search input is rendered
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();

    // Check if the search button with the search icon is rendered
    expect(screen.getByRole('button')).toBeInTheDocument();

    // Check if the footer text is rendered
    expect(screen.getByText('© 2022 Darsana.')).toBeInTheDocument();
    expect(screen.getByText('With our trust')).toBeInTheDocument();
  });
});
