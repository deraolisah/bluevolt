export default function WhyChooseUs() {
  const features = [
    {
      icon: '/icons/officer.svg',
      title: 'Officer-Led Surveys',
      description: 'Every survey conducted by certified maritime officers with actual offshore command experience.',
    },
    {
      icon: '/icons/independent.svg',
      title: 'Independent Assessments',
      description: 'Unbiased evaluations with no conflicts of interest. Our findings are based solely on technical merit.',
    },
    {
      icon: '/icons/fast.svg',
      title: 'Fast, Accurate Reporting',
      description: 'Detailed reports delivered within agreed timelines, with clear findings and actionable recommendations.',
    },
    {
      icon: '/icons/practical.svg',
      title: 'Practical Recommendations',
      description: 'Operationally focused advice that considers both technical requirements and commercial realities.',
    },
  ]

  return (
    <section id="why-choose-us" className="bg-navy-50 z-2 relative">
      <div className="container">
        <div className="text-center md:mb-16">
          <h2 className="section-title">Why Choose Our Services</h2>
          <p className="section-subtitle">
            We provide the operational insight that only comes from decades of actual offshore experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 card-hover border border-navy-200"
            >
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className="w-6 h-6 text-accent-blue"
                />
              </div>
              <h3 className="font-display font-semibold text-navy-800 text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-navy-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}