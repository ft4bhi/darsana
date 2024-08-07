// components/SholayurEducationalOtherIn.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SholayurEducationalOtherIn from './page'; // Adjust the import path if needed

describe('SholayurEducationalOtherIn', () => {
  test('renders the title and content correctly', () => {
    render(<SholayurEducationalOtherIn />);

    // Check if the title is rendered
    expect(screen.getByText('Sholayur Educational Support Program')).toBeInTheDocument();

    // Check if the main content is rendered
    expect(screen.getByText('Educational support program at Sholayur tribal higher secondary school, Attappady Darsana intervenes to provide constructive and qualitative educational support programs that address the issues of backwardness in the area of education in Kerala, particularly in the tribal regions of the state due to socio-economic reasons. To this end, Darsana began studying and understanding the problem of learning difficulties among students in the students in the tribal regions in the state. We started with a tribal school in Attappady; The Govt. tribal higher secondary school, Sholayur. Through various interactions with teachers, students, and the local community, Darsana formulated actionable plans for educational interventions in 2019, partnering with other educational experts to ensure the quality of the interventions. The key objectives of these interventions were:')).toBeInTheDocument();
    expect(screen.getByText('1. Identify specific programs that address the learning problems of tribal students caused by language conflicts.')).toBeInTheDocument();
    expect(screen.getByText('2. Support the school with materials and training to implement the identified programs.')).toBeInTheDocument();
    expect(screen.getByText('3. Plan or join various programs for supporting the students from tribal communities to reach the mainstream with pride and dignity, without leaving their language and culture, but by protecting and enriching those values.')).toBeInTheDocument();
    expect(screen.getByText('The first issue we addressed was the medium of instruction in the classrooms of standards I to VII.')).toBeInTheDocument();
    expect(screen.getByText('The textbooks, teaching, and examinations are in Malayalam, which is not the student\'s mother tongue, Irula, a scriptless language. Children often face difficulty in understanding concepts and achieving their learning outcomes. To support the students to overcome this obstacle in learning, it was necessary to transform the learning environment into something more motivating and encouraging. This program included adding accessible reading materials, digital reading materials and activities, and other learning aids for the students, as well as multiple workshops for the teachers to integrate these materials into their teaching process.')).toBeInTheDocument();
    expect(screen.getByText('1. Darsana installed classroom libraries in all primary-level classrooms with carefully selected reading materials in Malayalam and English.')).toBeInTheDocument();
    expect(screen.getByText('2. Darsana conducted multiple training workshops for teachers and students to design integrated learning activities to boost confidence and overcome the language barrier.')).toBeInTheDocument();
    expect(screen.getByText('3. Darsana also delivered multifunctional cubes for various activities of students from classes I to VII. A full-day workshop was also conducted to demonstrate various possibilities with the cubes, such as fun games, math activities, seating, and performance activities.')).toBeInTheDocument();
  });
});
