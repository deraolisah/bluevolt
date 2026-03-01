import React, { useState } from 'react';

const Contact = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section className="container px-4 py-8">
      <h1 className="text-[#0B3D5F] mb-4 text-2xl font-bold">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have questions or want to learn more about our maritime services? Reach out to us!
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

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-[#0B3D5F]"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={`w-full p-3 border border-gray-300 rounded-md text-base ${
              isSubmitting ? 'bg-gray-200' : 'bg-white'
            }`}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-[#0B3D5F]"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className={`w-full p-3 border border-gray-300 rounded-md text-base ${
              isSubmitting ? 'bg-gray-200' : 'bg-white'
            }`}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-[#0B3D5F]"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            disabled={isSubmitting}
            className={`w-full p-3 border border-gray-300 rounded-md text-base resize-y ${
              isSubmitting ? 'bg-gray-200' : 'bg-white'
            }`}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md text-base font-medium text-white transition-colors ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed opacity-70'
              : 'bg-[#0B3D5F] hover:bg-[#0a2f4a]'
          }`}
        >
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
                  5.291A7.962 7.962 0 014 12H0c0 3.042 
                  1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;