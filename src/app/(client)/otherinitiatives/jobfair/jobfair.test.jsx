// components/JobFairOtherInviaties.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobFairOtherInviaties from './JobFairOtherInviaties'; // Adjust the import path if needed

describe('JobFairOtherInviaties', () => {
  test('renders the title and content correctly', () => {
    render(<JobFairOtherInviaties />);

    // Check if the title is rendered
    expect(screen.getByText('Job Fair')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText(/Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College/)).toBeInTheDocument();
    expect(screen.getByText(/Darsana was a partner for the Deshabhimani Job fair held at Kozhikode/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Job Fair hero image')).toBeInTheDocument();
  });
});
