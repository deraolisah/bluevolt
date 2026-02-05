import { useState } from 'react'

export default function ContactForm() {
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

  const serviceTypes = [
    'Maritime Vessel Survey',
    'Machinery & Electrical Survey',
    'Emergency & Safety System Survey',
    'Vessel Brokerage',
    // 'Multiple Services',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('Thank you for your request. Our team will contact you within 24 hours.')
  }

  return (
    <section id="contact" className="">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title"> Request a Vessel or Survey </h2>
            <p className="section-subtitle">
              {/* Please provide details about your requirements. A senior officer will contact you within 24 hours. */}
              Please specify vessel type, operational area, duration, and technical requirements when requesting availability.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-navy-50 rounded-lg shadow-lg p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
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
                  placeholder="e.g., Urgent, Within 2 weeks"
                  className="w-full px-4 py-3 border border-navy-300 rounded-md focus:outline-none focus:ring focus:ring-navy-700 focus:border-transparent"
                />
              </div>
            </div>

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

            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-12 py-4 text-lg"
              >
                Submit Request
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