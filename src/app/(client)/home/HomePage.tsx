"use client";
import "../../globals.css";
import React, { useState, useEffect } from 'react';
import HeroCarousel from '@/components/homepage/Hero';
import EventCarousel from "@/components/homepage/event";
import image17 from '@/assets/home/image17.png';
import bijuschreiyanhomeheroimage from '@/assets/home/bijuschreiyanhomeheroimage.png';
import darsanaCommunityEventProgram from '@/assets/home/darsanaCommunityEventProgram.png';
import DarsanaSection from '@/components/homepage/DarsanaSection';
import programLogo from '@/assets/home/programLogo.svg';
import galleryLogo from '@/assets/home/galaryLogo.png';
import conversationLogo from '@/assets/home/conversationLogo.svg';
import ProductHighlight from '@/components/homepage/product';
import producthome1 from '@/assets/home/producthome1.png';
import producthome2flower from '@/assets/home/producthome2flower.png';
import productimagehomeplant3 from '@/assets/home/productimagehomeplant3.png';
import Featured from "@/components/homepage/featured";

const slideData = [
    {
        imageSrc: image17,
        title: 'Biju Cherian Scholarship (BCS) program - Slide 1',
        subtitle: 'Subtitle for Slide 1',
    },
    {
        imageSrc: bijuschreiyanhomeheroimage,
        title: 'Biju Cherian Scholarship (BCS) program - Slide 2',
        subtitle: 'Subtitle for Slide 2',
    },
    {
        imageSrc: darsanaCommunityEventProgram,
        title: 'Biju Cherian Scholarship (BCS) program - Slide 3',
        subtitle: 'Subtitle for Slide 3',
    },
];

interface EventItem {
    title: string;
    description: string;
    date: string; // Format this in your UI if needed
    month: string; // Use this for formatting dates or display
}

const HomePage: React.FC = () => {
    const [events, setEvents] = useState<EventItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/upComingEvent');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data: EventItem[] = await response.json();
                setEvents(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading events: {error}</div>;
    }

    return (
        <div>
            {/* Hero Section */}
            <HeroCarousel slideData={slideData} autoPlay={true} interval={5000} />

            {/* Upcoming Events Section */}
            <EventCarousel events={events} />

            {/* Darsana Section */}
            <DarsanaSection
                programLogo={programLogo}
                galleryLogo={galleryLogo}
                conversationLogo={conversationLogo}
            />

            {/* Discover Section */}
            <ProductHighlight
                title="Discover the Magic of Locally Sourced Treasures!"
                subtitle="Experience the beauty and quality of our local products"
                buttonText="Explore"
                images={[
                    producthome1.src,
                    producthome2flower.src,
                    productimagehomeplant3.src
                ]}
            />

            {/* Featured Section */}
            <Featured />

            
        </div>
    );
};

export default HomePage;
