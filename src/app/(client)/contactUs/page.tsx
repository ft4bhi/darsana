"use client";

import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacypolicy: false
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus('loading');
        try {
            const response = await fetch('/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to submit: ${response.status} ${response.statusText}. ${JSON.stringify(errorData)}`);
            }
            const result = await response.json();
            console.log('Submission result:', result);
            setSubmitStatus('success');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                privacypolicy: false
            });
        } catch (error) {
            console.error('Error submitting:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstname" className="block mb-2">First Name *</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastname" className="block mb-2">Last Name *</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2">Phone *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block mb-2">Subject *</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="privacypolicy"
                            checked={formData.privacypolicy}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        I agree to the privacy policy *
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded"
                    disabled={submitStatus === 'loading'}
                >
                    {submitStatus === 'loading' ? 'Sending...' : 'Send'}
                </button>
            </form>
            {submitStatus === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
            )}
        </div>
    );
}