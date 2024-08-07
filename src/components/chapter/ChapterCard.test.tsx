import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChapterCard from '../path/to/ChapterCard'; // Adjust the import based on your file structure
import { Chapter } from '../path/to/ChapterCard'; // Adjust the import based on your file structure
import { RouterContext } from 'next/dist/shared/lib/router-context'; // Import RouterContext
import { createMockRouter } from 'next/router'; // Import createMockRouter

const mockChapter: Chapter = {
  name: 'Test Chapter',
  image: '/test-image.jpg',
};

describe('ChapterCard Component', () => {
  test('renders chapter name and image', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ChapterCard chapter={mockChapter} />
      </RouterContext.Provider>
    );
    
    // Check for chapter name
    const chapterName = screen.getByText('Test Chapter');
    expect(chapterName).toBeInTheDocument();
    
    // Check for chapter image
    const chapterImage = screen.getByAltText('Test Chapter');
    expect(chapterImage).toBeInTheDocument();
    expect(chapterImage).toHaveAttribute('src', expect.stringContaining('/_next/image?url=%2Ftest-image.jpg'));
  });

  test('links to the correct chapter page', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <ChapterCard chapter={mockChapter} />
      </RouterContext.Provider>
    );
    
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/chapters/Test Chapter');
  });
});
