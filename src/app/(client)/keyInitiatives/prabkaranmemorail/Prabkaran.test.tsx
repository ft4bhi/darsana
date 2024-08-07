// PrabkaranMemorailKeyInvitia.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrabkaranMemorailKeyInvitia from './page'; // Adjust the import path if needed

describe('PrabkaranMemorailKeyInvitia', () => {
  test('renders the title and content correctly', () => {
    render(<PrabkaranMemorailKeyInvitia />);

    // Check if the title is rendered
    expect(screen.getByText('Prabakaran Memorial Best Project Award')).toBeInTheDocument();

    // Check if specific paragraphs are rendered
    expect(screen.getByText(/The annual general body of Darsana held in 2010/)).toBeInTheDocument();
    expect(screen.getByText(/The award was established in honor of Sri Prabhakaran/)).toBeInTheDocument();
    expect(screen.getByText(/The Prabhakaran Award comprises of cash prize and a Certificate/)).toBeInTheDocument();
    expect(screen.getByText(/Darsana will also extend support to the winners in any of the following/)).toBeInTheDocument();
    expect(screen.getByText(/There were 41 projects which were registered for the Prabhakaran Award 2024/)).toBeInTheDocument();
    expect(screen.getByText(/Interim Review of these projects were done on 12th, 13th, 14th and 19th February evenings/)).toBeInTheDocument();
    expect(screen.getByText(/The presentation included about 5 power point slides/)).toBeInTheDocument();
    expect(screen.getByText(/A Jotform was shared to the judges/)).toBeInTheDocument();
    expect(screen.getByText(/The final review is expected in May-June depending on the Final Year exam/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Prabkaran memorial key invitiatives hero image')).toBeInTheDocument();
  });
});
