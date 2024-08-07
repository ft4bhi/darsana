// BijuCherianEndowmentTalkKe.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BijuCherianEndowmentTalkKe from './page'; // Adjust the import path if needed

describe('BijuCherianEndowmentTalkKe', () => {
  test('renders the title and content correctly', () => {
    render(<BijuCherianEndowmentTalkKe />);

    // Check if the title is rendered
    expect(screen.getByText('Biju Cherian Endowment Talk')).toBeInTheDocument();

    // Check if specific paragraphs are rendered
    expect(screen.getByText(/The Biju Cherian Endowment Talk is a yearly seminar/)).toBeInTheDocument();
    expect(screen.getByText(/The first talk, held on August 8, 2009/)).toBeInTheDocument();
    expect(screen.getByText(/The topic of the second talk held on August 15, 2010/)).toBeInTheDocument();
    expect(screen.getByText(/The third talk in 2011 was on the topic/)).toBeInTheDocument();
    expect(screen.getByText(/On August 12, 2012, the Seminar on “Waste Management and Zero Waste Kerala”/)).toBeInTheDocument();
    expect(screen.getByText(/The fifth Biju Cheriyan Endowment Talk was delivered by Com. Saji Varghese/)).toBeInTheDocument();
    expect(screen.getByText(/The sixth talk was held on August 9, 2014/)).toBeInTheDocument();
    expect(screen.getByText(/The seventh talk was held on August 1, 2015/)).toBeInTheDocument();
    expect(screen.getByText(/The eighth talk was held on July 10, 2016/)).toBeInTheDocument();
    expect(screen.getByText(/The ninth talk was held on August 13, 2017/)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Biju Cherian Endowment Talk key invitations hero image')).toBeInTheDocument();
  });
});
