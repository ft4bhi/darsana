// ProductHero.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductHero from './ProductHero';
import Slide from './heroimage';

// Mock the Slide component
jest.mock('./Slides', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mock-slide" />),
}));

describe('ProductHero', () => {
  test('renders the slider with the correct number of slides', () => {
    render(<ProductHero />);

    // Check if the mocked slides are rendered
    const slides = screen.getAllByTestId('mock-slide');
    expect(slides).toHaveLength(3); // Expecting 3 slides based on the slideData array
  });
});
