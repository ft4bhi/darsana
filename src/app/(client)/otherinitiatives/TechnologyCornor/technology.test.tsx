// components/TechnologyCornerOtherInviat.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechnologyCornerOtherInviat from './page'; // Adjust the import path if needed

describe('TechnologyCornerOtherInviat', () => {
  test('renders the title and content correctly', () => {
    render(<TechnologyCornerOtherInviat />);

    // Check if the title is rendered
    expect(screen.getByText('Technology Corner')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText('Prof K Viswanathan, who was part of our Mechanical engineering department, was a leading light and a guide for many of the students during his tenure. He remained an influencer and a guide even after he retired from the college. Through his involvement at the IRTC, he had stamped a strong mark in alternative and sustainable approaches to engineering practices.')).toBeInTheDocument();
    expect(screen.getByText('As a memorial to the beloved teacher, Darsana set up a technology corner at Palakkad district public library called Prof. K. Viswanathan Memorial Technology Corner. The technology corner has reference books in engineering, management, and related subjects. The technology corner was inaugurated by Mr. K.D Prasenan, (Hon. MLA Alathur constituency). The facility is being utilized by students across the district.')).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Prof. K. Viswanathan Memorial Technology Corner')).toBeInTheDocument();
  });
});
