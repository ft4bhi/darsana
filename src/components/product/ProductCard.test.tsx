// ProductCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';

// Mock Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

const mockProduct = {
  imageUrl: '/images/1.jpg',
  title: 'Sample Product',
  description: 'This is a sample product description.',
  price: '$100',
};

describe('ProductCard', () => {
  test('renders the product card with correct data', () => {
    render(<ProductCard product={mockProduct} />);

    // Check if image is rendered
    expect(screen.getByAltText('Sample Product')).toBeInTheDocument();

    // Check if title is rendered
    expect(screen.getByText('Sample Product')).toBeInTheDocument();

    // Check if description is rendered
    expect(screen.getByText('This is a sample product description.')).toBeInTheDocument();

    // Check if price is rendered
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});
