export default function IndustriesServed() {
  const industries = [
    'Oil & Gas Super Majors',
    'Offshore Operators',
    'Upstream Companies',
    'Vessel Charterers',
    'Asset Owners & Managers',
    'Marine & Technical Managers',
    'Drilling Contractors',
    'Port & Terminal Operators',
  ]

  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="section-title">
            Who We Serve
          </h2>
          <p className="max-w-3xl mx-auto text-lg">
            We serve leading companies in the offshore and maritime sectors, providing technical assessments they can trust.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-navy-100/50 rounded-lg p-2 sm:p-6 text-center hover:bg-navy-100 transition-colors duration-200 border border-navy-200"
            >
              <div className="font-medium">
                {industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}