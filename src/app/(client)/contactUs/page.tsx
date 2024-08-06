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