import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './footer'; // Adjust the import based on your file structure

describe('Footer Component', () => {
  test('renders logo', () => {
    render(<Footer />);
    
    // Check for logo
    const logo = screen.getByAltText('Darsana Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/divlogo1@2x.png');
  });

  test('renders all navigation links', () => {
    render(<Footer />);
    
    // Check for main links
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Initiatives')).toBeInTheDocument();
    expect(screen.getByText('Chapters')).toBeInTheDocument();
    expect(screen.getByText('Eye magazine')).toBeInTheDocument();
  });

  test('renders all social media icons', () => {
    render(<Footer />);
    
    // Check for social media icons
    const socialIcons = screen.getAllByAltText('Social Icon');
    expect(socialIcons.length).toBe(4);
  });
});
