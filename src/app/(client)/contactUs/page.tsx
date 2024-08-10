"use client";
import type { NextPage } from 'next';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';

const ContactUsFinal: NextPage = () => {
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
    console.log('Submitting form data:', formData);

    // Simulate API call
    setTimeout(async () => {
      try {
        // Simulate a 50% chance of success
        if (Math.random() < 0.5) {
          throw new Error('Simulated API error');
        }

        console.log('Submission successful');
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
    }, 2000); // Simulate a 2-second delay
  };

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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="privacypolicy"
                    name="privacypolicy"
                    checked={formData.privacypolicy}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="privacypolicy" className="ml-2 block text-sm text-gray-900">
                    I understand and agree to the Privacy Policy
                  </label>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white py-2 px-4 rounded-md transition duration-300 ${submitStatus === 'loading'
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  disabled={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsFinal;