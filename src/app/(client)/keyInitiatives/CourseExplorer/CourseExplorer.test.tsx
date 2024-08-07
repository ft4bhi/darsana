// CourseExplorerKeyInvitative.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseExplorerKeyInvitative from './page'; // Adjust the import path if needed

describe('CourseExplorerKeyInvitative', () => {
  test('renders the title and content correctly', () => {
    render(<CourseExplorerKeyInvitative />);

    // Check if the title is rendered
    expect(screen.getByText('Course Explorer')).toBeInTheDocument();

    // Check if specific paragraphs are rendered
    expect(screen.getByText(/The Darsana Calicut chapter organized an online awareness programme/)).toBeInTheDocument();
    expect(screen.getByText(/Academicians from reputed institutes handled the sessions/)).toBeInTheDocument();
    expect(screen.getByText(/The sessions on the first day were handled by Dr K. V. Gangadharan/)).toBeInTheDocument();
    expect(screen.getByText(/The third day had four sessions conducted by Dr K. A. Abdul Nazeer/)).toBeInTheDocument();
    expect(screen.getByText(/Around 325 students attended sessions on courses that were in great demand/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Course Explorer 2021 hero image')).toBeInTheDocument();
  });
});
