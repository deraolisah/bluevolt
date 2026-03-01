import { useState } from 'react';


const RequestForm = () => {

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceType: '',
    vesselType: '',
    location: '',
    timeline: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const serviceTypes = [
    'Vessel Brokerage',
    'Maritime Vessel Survey',
    'Machinery Electrical & Emergency Systems Survey',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // Send to your Express backend
      const response = await fetch(`${API_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        setSubmitStatus('success')
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          serviceType: '',
          vesselType: '',
          location: '',
          timeline: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="request" className="">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Request a Vessel or Survey</h2>
            <p className="section-subtitle">
              Please specify vessel type, operational area, duration, and technical requirements when requesting availability.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <strong>Thank you for your request!</strong> 
              <p className="mt-2">Our team will contact you at {formData.email} within 24 hours.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <strong>Oops! Something went wrong.</strong>
              <p className="mt-2">There was an error submitting your form. Please try again or contact us directly at info@bluevoltmarine.com</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-navy-50 rounded-lg shadow-lg p-4.5 md:p-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-navy-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-navy-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy focus:border-transparent"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-navy-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Vessel Type */}
              <div>
                <label htmlFor="vesselType" className="block text-sm font-medium text-navy-700 mb-2">
                  Vessel Type / Scope
                </label>
                <input
                  type="text"
                  id="vesselType"
                  name="vesselType"
                  value={formData.vesselType}
                  onChange={handleChange}
                  placeholder="e.g., PSV, AHTS, Drilling Rig"
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-navy-700 mb-2">
                  Location / Port
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., North Sea, Gulf of Mexico"
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-navy-700 mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Urgent, Within 2 weeks, 1 month"
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                Additional Details / Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                placeholder="Please provide any additional details about your requirements, specific concerns, or operational context."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary px-12 py-4 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Submit Request'}
              </button>
              <p className="text-sm text-navy-600 mt-4">
                Our team will contact you within 24 hours to discuss your requirements.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RequestForm;