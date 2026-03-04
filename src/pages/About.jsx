const About = () => {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title"> About Us </h2>
          <div className="space-y-4 text-navy-600">
            <p>
              BlueVoltMarine is a brokerage-first maritime services company built from the deck plate up.
            </p>
            <p>
              We combine commercial vessel sourcing with practical offshore/maritime judgement and technical readiness and awareness, so clients receive assets that are fit-for-purpose and prepared for safe, reliable operations.
            </p>
            <p>
              Our team consists of two sea-going ETOs with extensive, decade-long experience certified by Lloyd's Maritime Academy.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-display font-semibold text-navy-800"> Our Vison </h4>
              <p className="text-navy-600">
                To become a trusted maritime services partner known for speed, transparency, and technically credible outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy-800"> Our Mission </h4>
              <p className="text-navy-600">
                To deliver brokerage led solutions that secure the right vessel, reduce downtime risk through readiness screening, and execute with safety and accountability.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy-800"> What we do </h4>
              <p className="text-navy-600">Specialists in vessel electrical systems, automation, and emergency power systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;