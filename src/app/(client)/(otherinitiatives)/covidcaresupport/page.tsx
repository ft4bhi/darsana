import React from 'react';

const CovidCareSupportPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Covid Care Support
                </h1>
            </div>

            <div className="flex justify-center my-8">
                <img
                    src="src\assets\initiatives\covid_care.png"
                    alt="Covid Care Support"
                    className="w-full max-w-4xl rounded-lg shadow-lg"
                />
            </div>

            <div className="text-gray-700 leading-loose">
                <p className="mb-4">
                    Darsana has been at the forefront of Covid care and support; a few initiatives that Darsana had taken during the pandemic are highlighted below.
                </p>
                <p className="mb-4">
                    We were at the forefront of helping Covid-affected people in the Middle East region. We coordinated financial and repatriation support for the affected people, including sponsoring a repatriation flight in coordination with progressive alumni of other Engineering colleges in Kerala.
                </p>
                <p className="mb-4">
                    Darsana was also involved in the support of affected people in Kerala. This included the distribution of food kits, PPE kits, financial support, etc.
                </p>
                <p className="mb-4">
                    We were also involved in the development of a low-cost ventilator with the technical support of the National Institute of Electronics and Information Technology (NIELIT), Calicut. This ventilator is now under field testing at Government Medical College, Kozhikode. We hope to be able to provide affordable ventilator care.
                </p>
            </div>
        </div>
    );
};

export default CovidCareSupportPage;
