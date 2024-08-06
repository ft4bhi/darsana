import type { NextPage } from 'next';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const ContactUsFinal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - NSS College of Engineering</title>
        <meta name="description" content="Get in touch with NSS College of Engineering. We're here to help with any questions or inquiries you may have." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Get in Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-gradient-to-b from-blue-400 to-blue-100 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Visit Us</h3>
                  <p>NSS College of Engineering, Agathethara Palakkad, Kerala</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Chat to Us</h3>
                  <p>Our friendly group is here to help!</p>
                  <p>Monday - Friday</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p>+91 99999999999</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p>infodarsana@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                    <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="firstName" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="lastName" className="w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input type="checkbox" id="privacyPolicy" name="privacyPolicy" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-900">
                    I understand and agree to the Privacy Policy
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsFinal;

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

