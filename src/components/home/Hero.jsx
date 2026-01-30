export default function Hero() {
  return (
    <section className="relative bg-navy-800 overflow-hidden">
      {/* <div className="absolute inset-0 bg-linear-to-r from-navy-800 to-navy-800 opacity-100"></div> */}
      <div className="relative section-container">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Certified Maritime Surveys & Vessel Brokerage
          </h1>
          <p className="text-xl text-navy-100 mb-8 max-w-3xl mx-auto">
            Lloyd's Maritime Academy certified officers with decades of offshore and oilfield experience. Independent assessments for super majors, operators, and asset owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Request a Survey
            </a>
            <a
              href="#vessel-brokerage"
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Find a Vessel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}