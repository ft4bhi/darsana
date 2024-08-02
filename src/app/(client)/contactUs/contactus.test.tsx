import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactUs from  "./page"

// Mock the console.log function
console.log = jest.fn();

describe('ContactUs Component', () => {
  beforeEach(() => {
    render(<ContactUs />);
  });
  
  test('renders the contact form', () => {
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('Send us a message')).toBeInTheDocument();
  });

  test('renders all form fields', () => {
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByLabelText(/I understand and agree to the Privacy Policy/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });

  test('updates form fields on input', () => {
    const firstNameInput = screen.getByLabelText('First Name');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput).toHaveValue('John');

    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');
  });
  
  test('submits the form with correct data', async () => {
    // Fill out the form
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'This is a test message.' } });
    fireEvent.click(screen.getByLabelText(/I understand and agree to the Privacy Policy/));

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    // Wait for the console.log to be called
    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith('Form data submitted:', {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '1234567890',
        subject: 'Test Subject',
        message: 'This is a test message.',
        privacyPolicy: true,
      });
    });
  });

  test('does not submit form when privacy policy is not accepted', () => {
    // Fill out the form without checking the privacy policy
    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

    // Check that console.log was not called
    expect(console.log).not.toHaveBeenCalled();
  });

  test('displays contact information correctly', () => {
    expect(screen.getByText('Chat to Us')).toBeInTheDocument();
    expect(screen.getByText('Our friendly group is here to help!')).toBeInTheDocument();
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument();
    expect(screen.getByText('Visit Us')).toBeInTheDocument();
    expect(screen.getByText('NSS College of Engineering, Agathethara Palakkad, Kerala')).toBeInTheDocument();
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('+91 99999999999')).toBeInTheDocument();
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('Connect with us on social media')).toBeInTheDocument();
  });
});