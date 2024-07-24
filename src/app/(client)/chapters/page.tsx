"use client"
import React, { useState } from 'react';
import ChapterCard from '../../../components/chapter/chapterCard';

const chapters = [
    { name: 'Banglore', image: '/path/to/banglore.jpg' },
    { name: 'Palkkad', image: '/path/to/palkkad.jpg' },
    { name: 'Calicut', image: '/path/to/calicut.jpg' },
    { name: 'Oman', image: '/path/to/oman.jpg' },
    { name: 'Saudi', image: '/path/to/no-image.jpg' },
    { name: 'UAE', image: '/path/to/uae.jpg' },
    { name: 'North America', image: '/path/to/north-america.jpg' },
];

const ChapMain: React.FC = () => {
    const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center my-8">
                <h1 className="text-3xl font-bold">Our Chapters</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {chapters
                    .filter(chapter => !selectedChapter || chapter.name === selectedChapter)
                    .map((chapter, index) => (
                        <ChapterCard chapter={chapter} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default ChapMain;
