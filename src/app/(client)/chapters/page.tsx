"use client";
import React, { useState } from "react";
import ChapterCard from "../../../components/chapter/chapterCard";
import Bangalorechapter from "../../../assets/chapter/bangalorechapterheroimage.png";
import palkkadchapter from "../../../assets/chapter/palkkadchapterheroimage.png";
import Omanchapter from "../../../assets/chapter/Omanchapterheroimage.png";
import saudichapter from "../../../assets/chapter/saudichapter.png";
import NorthAmericachapter from "../../../assets/chapter/saudichapter.png";
import uaechapter from "../../../assets/chapter/uaechapter.png";
import calicutchapter from "../../../assets/chapter/calicutchapter.png";

// Chapter data with slug mapping
const chapters = [
  { name: "Banglore", image: Bangalorechapter.src, slug: "Banglore" },
  { name: "Palakkad", image: palkkadchapter.src, slug: "Palakkad" },
  { name: "Calicut", image: calicutchapter.src, slug: "Calicut" },
  { name: "Oman", image: Omanchapter.src, slug: "Oman" },
  { name: "Saudi", image: saudichapter.src, slug: "Saudi" },
  { name: "UAE", image: uaechapter.src, slug: "UAE" },
  { name: "NorthAmerica", image: NorthAmericachapter.src, slug: "NorthAmerica" },
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
          .filter((chapter) => !selectedChapter || chapter.name === selectedChapter)
          .map((chapter, index) => (
            <ChapterCard chapter={chapter} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ChapMain;
