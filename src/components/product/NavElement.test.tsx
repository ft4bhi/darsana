// NavElement.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavElement from './NavElement';
import { server } from './mocks/server'; // Adjust the path if needed

describe('NavElement', () => {
  test('renders navigation links correctly', () => {
    render(<NavElement />);

    // Check if each link is rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Plants')).toBeInTheDocument();
    expect(screen.getByText('aggrculture')).toBeInTheDocument();
    expect(screen.getByText('House products')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
