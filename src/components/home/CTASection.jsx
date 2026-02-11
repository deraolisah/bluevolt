export default function CTASection() {
  return (
    <section className="bg-navy-800">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Request a Survey or Vessel Assessment
          </h2>
          <p className="text-xl text-navy-200 mb-8 max-w-3xl mx-auto">
            Contact our team of certified maritime officers for independent assessments or vessel sourcing. Response within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-navy-800 px-8 py-4 rounded-md font-semibold text-lg hover:bg-navy-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-800"
            >
              Request Survey
            </a>
            <a
              href="#contact"
              className="bg-accent-blue text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-navy-800"
            >
              Find a Vessel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}