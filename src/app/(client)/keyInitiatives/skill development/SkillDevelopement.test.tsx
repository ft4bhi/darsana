// SkillDevelopementProgramKey.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SkillDevelopementProgramKey from './page'; // Adjust the import path if needed

describe('SkillDevelopementProgramKey', () => {
  test('renders the title and content correctly', () => {
    render(<SkillDevelopementProgramKey />);

    // Check if the title is rendered
    expect(screen.getByText('Skill Development Program')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText(/As a part of the initiatives to help students to build rewarding careers/)).toBeInTheDocument();
    expect(screen.getByText(/In 2008, we jointly launched this program with the college's placement cell/)).toBeInTheDocument();
    expect(screen.getByText(/The skill development program has grown significantly over time./)).toBeInTheDocument();

    // Check if the image is rendered
    expect(screen.getByAltText('Skill development program key initiatives hero image')).toBeInTheDocument();
  });
});
