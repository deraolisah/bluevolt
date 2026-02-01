export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Request',
      description: 'Submit survey details including vessel type, location, and scope requirements.',
    },
    {
      number: '02',
      title: 'Review',
      description: 'Our senior officers review requirements and assign appropriate survey team.',
    },
    {
      number: '03',
      title: 'Survey',
      description: 'On-site assessment by certified officers with relevant operational experience.',
    },
    {
      number: '04',
      title: 'Report',
      description: 'Detailed technical report with findings, compliance status, and practical recommendations.',
    },
  ]

  return (
    <section id="process" className="bg-navy-800 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white"> Work Smarter, Not Harder <br/> with Bluevolt </h2>
          {/* <p className="section-subtitle">
            A straightforward process designed for efficiency and technical rigor.
          </p> */}
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 text-center z-10 relative card-hover border border-navy-200">
                  <div className="w-16 h-16 bg-accent-blue text-white rounded-full flex items-center justify-center text-2xl font-bold font-display mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-navy-800 text-xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-navy-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}