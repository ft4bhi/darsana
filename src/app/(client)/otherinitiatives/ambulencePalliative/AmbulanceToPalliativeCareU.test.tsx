// components/AmbulanceToPalliativeCareU.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AmbulanceToPalliativeCareU from './page'; // Adjust the import path if needed

describe('AmbulanceToPalliativeCareU', () => {
  test('renders the title and content correctly', () => {
    render(<AmbulanceToPalliativeCareU />);

    // Check if the title is rendered
    expect(screen.getByText('Ambulance to Palliative care unit')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText(/Darsana contributed an Ambulance for EMS Jana SevanaKendram/)).toBeInTheDocument();
    expect(screen.getByText(/The state of the art ambulance was handed over to the society/)).toBeInTheDocument();
    expect(screen.getByText(/This initiative was widely appreciated as a proof of Darsana's commitment to social causes./)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Ambulance to Palliative care unit hero image')).toBeInTheDocument();
  });
});
