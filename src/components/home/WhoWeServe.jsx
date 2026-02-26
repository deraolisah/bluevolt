export default function WhoWeServe() {
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
    <section className='container flex flex-col md:flex-row'>
      <div className='flex w-full md:w-1/4'>
        <h2 className='section-title'> Who We Serve </h2>
      </div>
      <div className='flex flex-col-reverse sm:flex-col w-full md:w-3/4 gap-2 space-y-4'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-primary/5 rounded-sm p-2 sm:p-4 text-center hover:bg-navy-100 transition-colors duration-200 border border-navy-200"
            >
              <div className="font-normal text-start text-sm sm:text-base">
                {industry}
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-sm sm:text-lg">
          We serve leading companies in the offshore and maritime sectors, providing vessels and technical assessments they can trust.
        </p>
      </div>
    </section>
  )
}