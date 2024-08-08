// components/CovidCareSupportOtherInvia.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CovidCareSupportOtherInvia from './page'; // Adjust the import path if needed

describe('CovidCareSupportOtherInvia', () => {
  test('renders the title and content correctly', () => {
    render(<CovidCareSupportOtherInvia />);

    // Check if the title is rendered
    expect(screen.getByText('Covid care Support')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText(/Darsana has been at the forefront of Covid care and support/)).toBeInTheDocument();
    expect(screen.getByText(/We were at the forefront of helping Covid affected people in the middle east region/)).toBeInTheDocument();
    expect(screen.getByText(/Darsana was also involved in the support of affected people in Kerala/)).toBeInTheDocument();
    expect(screen.getByText(/We were also involved in the development of a low-cost ventilator/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Covid care support hero image')).toBeInTheDocument();
  });
});
