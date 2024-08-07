import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from '../path/to/Dropdown'; // Adjust the import based on your file structure

describe('Dropdown Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const label = 'Select an option';
  const handleSelect = jest.fn();

  beforeEach(() => {
    render(<Dropdown options={options} onSelect={handleSelect} label={label} />);
  });

  test('renders dropdown with label', () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('opens the dropdown menu when button is clicked', () => {
    fireEvent.click(screen.getByRole('button'));
    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('closes the dropdown menu after selecting an option', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText(options[0]));
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
  });

  test('calls onSelect with the correct option', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText(options[1]));
    expect(handleSelect).toHaveBeenCalledWith(options[1]);
  });

  test('updates the button label to the selected option', () => {
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText(options[2]));
    expect(screen.getByRole('button')).toHaveTextContent(options[2]);
  });
});
