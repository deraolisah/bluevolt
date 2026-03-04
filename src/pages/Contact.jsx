import React, { useState } from 'react';
import { Headset, Mail, MapPin, Phone, Pin } from "lucide-react";

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    
    try {
      console.log('Submitting form to:', `${API_URL}/contact`);
      console.log('Form data:', formData);
      
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log('Response:', data);
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Network error - please check if server is running');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container">
      <h2 className='text-4xl text-center font-semibold mb-4'> Get In Touch </h2>
      <p className='text-base text-center text-navy-600 max-w-xl mx-auto mb-8'>
        Have questions or want to learn more about our maritime services? We're here to help. Reach out to our team and we'll get back to you within 24 hours.
      </p>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-200 border border-green-300 rounded-md text-green-900">
          <strong>✓ Thank you for contacting us!</strong>
          <p className="mt-2 mb-0">
            We've received your message and will get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-200 border border-red-300 rounded-md text-red-800">
          <strong>✗ Oops! Something went wrong.</strong>
          <p className="mt-2 mb-0">
            {errorMessage || 'There was an error sending your message. Please try again.'}
          </p>
          <p className="mt-2 mb-0 text-sm">
            You can also contact us directly at <strong>info@bluevoltmarine.com</strong>
          </p>
        </div>
      )}


      
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          {/* <h2 className="text-2xl font-bold mb-8">
            Contact Information
          </h2> */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-white">
                <Phone />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Phone
                </h3>
                <a href="tel:+1(256)491-8098" className="text-gray-900 font-medium">
                  +1 (256) 491-8098
                </a>
                <p className="text-gray-600 text-sm">
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-white">
                <Mail />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>
                <a href="mailto:support@yolecouriers.com" className="text-gray-900 text-sm font-medium">
                  info@bluevoltmarine.com
                </a>
                <p className="text-gray-600 text-sm">
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-white">
                <MapPin />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Office
                </h3>
                <p className="text-gray-900 text-sm font-medium">
                  1500 Commerce Street, Suite 720,
                </p>
                <p className="text-gray-600 text-sm">
                  {/* Dallas TX 75201, United States */}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-white">
                {/* <FaClock className="text-xl" /> */}
                <Headset />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Working Hours
                </h3>
                <p className="text-gray-900 text-sm font-medium">
                  24/7 Customer Support
                </p>
                <p className="text-gray-600 text-sm">
                  {/* Operations: 24/7 */}
                </p>
              </div>
            </div>
          </div>
        </div>

      

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-xl shadow-lg border border-gray-200 p-4 md:p-8">
            <h2 className="text-2xl font-bold mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    className={`w-full px-4 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary ${
                    isSubmitting ? 'bg-gray-200' : '' }`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="mail@example.com"
                    className={`w-full px-4 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary ${
                    isSubmitting ? 'bg-gray-200' : '' }`}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary ${
                    isSubmitting ? 'bg-gray-200' : '' }`}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-medium mb-2">
                    Subject 
                  </label>
                  <input
                    type='text'
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Subject Here"
                    className={`w-full px-4 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary ${
                    isSubmitting ? 'bg-gray-200' : '' }`}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-[#0B3D5F]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  disabled={isSubmitting}
                  placeholder='Tell us how we can help you...'
                  className={`w-full px-4 p-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-primary ${
                  isSubmitting ? 'bg-gray-200' : '' }`}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md text-base font-medium text-white transition-colors ${
                isSubmitting ? 'bg-gray-600 cursor-not-allowed opacity-70'
                : 'bg-[#0B3D5F] hover:bg-[#0a2f4a]' }`}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>              
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;