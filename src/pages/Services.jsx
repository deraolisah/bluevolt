export default function Services() {
  const services = [
    {
      icon: '/icons/survey.svg',
      title: 'Maritime Vessel Surveys',
      description: 'Comprehensive condition and compliance surveys for offshore vessels, rigs, and support craft. Includes hull, structure, and outfitting assessments.',
    },
    {
      icon: '/icons/machinery.svg',
      title: 'Uptime Machinery & Electrical Surveys',
      description: 'Detailed assessment of propulsion systems, power generation, thrusters, and electrical infrastructure to ensure operational reliability.',
    },
    {
      icon: '/icons/safety.svg',
      title: 'Emergency & Safety System Surveys',
      description: 'Evaluation of all safety systems including fire detection, life-saving appliances, emergency shutdown systems, and evacuation procedures.',
    },
    {
      icon: '/icons/brokerage.svg',
      title: 'Vessel Brokerage',
      description: 'Specialized vessel sourcing for offshore operations. Market analysis, technical vetting, and negotiation support for charter or purchase.',
    },
  ]

  return (
    <section id="services" className="container">
      Services
      {/* <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Maritime Services</h2>
          <p className="section-subtitle">
            Independent assessments conducted by certified maritime officers with operational offshore experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-navy-50 rounded-lg p-6 card-hover border border-navy-200"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                <img 
                  src={service.icon} 
                  alt="" 
                  className="w-6 h-6 text-accent-blue"
                />
              </div>
              <h3 className="font-display font-semibold text-navy-800 text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-navy-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}