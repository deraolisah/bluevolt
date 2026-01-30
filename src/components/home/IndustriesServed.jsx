export default function IndustriesServed() {
  const industries = [
    'Oil & Gas Super Majors',
    'Offshore Operators',
    'Upstream Production Companies',
    'Vessel Charterers',
    'Asset Owners & Managers',
    'Marine & Technical Managers',
    'Drilling Contractors',
    'Port & Terminal Operators',
  ]

  return (
    <section className="bg-navy-800 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Industries Served
          </h2>
          <p className="text-navy-200 max-w-3xl mx-auto text-lg">
            We serve leading companies in the offshore and maritime sectors, providing technical assessments they can trust.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-navy-700/50 rounded-lg p-6 text-center hover:bg-navy-700 transition-colors duration-200 border border-navy-600"
            >
              <div className="font-medium text-navy-100">
                {industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}