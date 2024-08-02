import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './navbar'; // Adjust the import based on your file structure

describe('Navbar Component', () => {
  test('renders all main navigation links', () => {
    render(<Navbar />);
    
    // Check for main links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Key initiatives')).toBeInTheDocument();
    expect(screen.getByText('Initiatives')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
  });

  test('opens dropdown when "Key initiatives" is clicked', () => {
    render(<Navbar />);

    const keyInitiativesButton = screen.getByText('Key initiatives');
    fireEvent.click(keyInitiativesButton);

    // Check if dropdown items appear
    expect(screen.getByText('Prabkaran Memorial')).toBeInTheDocument();
    expect(screen.getByText('Skill Development')).toBeInTheDocument();
    // Add additional assertions for other items in the dropdown
  });

  test('closes dropdown when clicking outside', () => {
    render(<Navbar />);

    const keyInitiativesButton = screen.getByText('Key initiatives');
    fireEvent.click(keyInitiativesButton);

    // Check dropdown is opened
    expect(screen.getByText('Prabkaran Memorial')).toBeInTheDocument();

    // Simulate clicking outside of the dropdown
    fireEvent.mouseDown(document.body);

    // Dropdown should be closed
    expect(screen.queryByText('Prabkaran Memorial')).not.toBeInTheDocument();
  });

  test('opens mobile menu when hamburger icon is clicked', () => {
    render(<Navbar />);
    
    const hamburgerButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(hamburgerButton);
    
    // Check if mobile menu is now visible
    expect(screen.getByText('Home')).toBeVisible();
    expect(screen.getByText('About us')).toBeVisible();
  });

  test('calls handleLinkClick when a link is clicked', () => {
    const { container } = render(<Navbar />);

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);

    // Since handleLinkClick sets activeLink, check if the Home link is now active
    expect(homeLink).toHaveClass('text-blue-700'); // Assuming the active link has this class
  });
});
