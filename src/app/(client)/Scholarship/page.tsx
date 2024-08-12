"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

import scholarship_hero from '@/assets/scholarship/scholarship_hero.png'

const DarsanaScholarshipPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('about');
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    // ... (previous code for faqData and toggleFAQ remains the same)
    const faqData = [
        { question: "Question text goes here", answer: "Answer text goes here" },
        { question: "Question text goes here", answer: "Answer text goes here" },
        { question: "Question text goes here", answer: "Answer text goes here" },
        { question: "Question text goes here", answer: "Answer text goes here" },
        { question: "Question text goes here", answer: "Answer text goes here" },
    ];
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const renderContent = () => {
        switch (activeTab) {
            // ... (previous cases for 'about', 'eligibility', and 'faq' remain the same)
            case 'about':
                return (
                    <div className="prose max-w-none">
                        <p>Biju Cheriyan studied Instrumentation and Control Engineering at the NSS College of Engineering in Palakkad from 1987 to 1991. Biju, who had been active in the progressive left movement since his school days, made a significant contribution to shaping the campus ethos at the NSSCE. An excellent student, he was also a committed supporter of students' rights, an ardent leftist, a practical leader, a tenacious fighter, a devoted friend, and most importantly a stunning human being. In 1997, he passed away far too soon. To preserve the memory of Biju Cheriyan and the principles he upheld, his friends formed Darsana, a group of like-minded former NSSCE students.</p>
                        <p>One of the flagship programs of Darsana, the Biju Cheriyan Endowment started with the modest aim of effectively intervening in the academic lives of some of the less privileged students of NSSCE. Beginning in 2008, an annual stipend of Rs. 8000 was provided to eight students of NSSCE, who were selected based on their economic status, after scrutiny. Over the years, this amount is increased to Rs 12,000, with the number of beneficiaries increasing to 40 students per year. The stipend is linked to their academic performance, with graded incentives for better CGPA. Darsana is proud to have made a difference in the lives of these students. It is heartening to see that quite a few of the beneficiaries, doing well in life, are now enthusiastically contributing to the Endowment in whatever way possible.</p>
                        <p>The Biju Cheriyan Endowment has now grown beyond just a scholarship scheme, with programs to equip the students in terms of better communication skills, career guidance sessions as well as motivational talks. Darsana members have also been mentoring some of the beneficiaries, spending time with them, guiding them over academic and personal difficulties, and enabling them to achieve better prospects. The Endowment is also used to organize regular academic programs to help the under-performers to learn better and progress towards their B.Tech degree. The Biju Cheriyan Endowment and the Scholarship are now well-known in the college and beyond, with the number of applications growing every year. We have had to regretfully reject quite a few suitable applicants, as the numbers are now going beyond our capacity to accommodate them, both financially and logistically.</p>
                        <p>The Endowment is built solely through contributions from Darsana members, in units of Rs.500/-. A corpus has been built up for this purpose and carefully administered by the Executive Committee. The entire Scholarship program, right from the call for applications, through shortlisting, vetting of the applications, visits to applicant's homes for verification, and finalization to the function for awarding the scholarship by the Principal, is run by Darsana members, with help from the college authorities.</p>
                    </div>
                );
            case 'eligibility':
                return (
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Eligibility Criteria:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Be a resident of India.</li>
                            <li>Be a school or college student.</li>
                            <li>Fall within the age range of 5 to 25 years.</li>
                        </ul>
                        <h3 className="font-bold text-lg mt-6">Documents Required:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Student ID proof (ID Card) issued by College.</li>
                            <li>Passport size Photo.</li>
                            <li>Aadhaar Card.</li>
                            <li>Income certificate</li>
                        </ul>
                    </div>
                );
            case 'faq':
                return (
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border rounded-md">
                                <button
                                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    {openFAQ === index ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                {openFAQ === index && (
                                    <div className="p-4 bg-gray-50">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                );
            case 'contact':
                return (
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <Mail size={24} className="text-blue-500" />
                                <div>
                                    <h3 className="text-xl font-semibold">Email</h3>
                                    <p className="text-gray-600">info@darsana.in</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} className="text-blue-500" />
                                <div>
                                    <h3 className="text-xl font-semibold">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Still have a question?</h3>
                                <p className="mb-4 text-gray-600">Visit our contact us page or click the button below to get in touch with us.</p>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div>Please select a tab</div>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="container mx-auto px-4">
                    <img src={scholarship_hero.src} alt="Scholarship Banner" className="w-full mb-4" />

                    <nav className="bg-blue-600 text-white mb-4">
                        <ul className="flex">
                            {['about', 'eligibility', 'faq', 'contact'].map((tab) => (
                                <li
                                    key={tab}
                                    className={`flex-1 text-center py-2 cursor-pointer ${activeTab === tab ? 'bg-blue-700' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="my-4">
                        {renderContent()}
                    </div>

                    <div className="text-center my-8">
                        <p className="mb-2">Click here to apply for the scholarship</p>
                        <Link href="scholarship/apply">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                APPLY NOW
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <img src="/api/placeholder/100/50" alt="Darsana Logo" className="mb-4" />
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Learn More</h3>
                            <ul className="space-y-1">
                                <li>About Darsana</li>
                                <li>Chapters</li>
                                <li>Ignite</li>
                                <li>Jobs</li>
                                <li>Scholarship</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Recent Activities</h3>
                            <ul className="space-y-1">
                                <li>Programs</li>
                                <li>Magazine</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-2">Contact Us</h3>
                            <p>Darsana Office: 123-456-7890</p>
                            <p>Mail us: darsana@gmail.com</p>
                            <div className="flex space-x-2 mt-2">
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <span className="sr-only">YouTube</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DarsanaScholarshipPage;