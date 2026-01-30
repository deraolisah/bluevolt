export default function TrustStrip() {
  const credentials = [
    {
      title: 'Lloyd\'s Maritime Academy',
      description: 'Certified Officers',
    },
    {
      title: 'All Ranks Certified',
      description: 'Masters, Chief Engineers, ETOs',
    },
    {
      title: 'Offshore Proven',
      description: 'Oil & Gas Experience',
    },
    {
      title: 'International Standards',
      description: 'Full Compliance',
    },
  ]

  return (
    <div className="bg-white border-b border-navy-200">
      <div className="section-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-blue/10 rounded-full mb-4">
                <img 
                  src="/icons/check.svg" 
                  alt="" 
                  className="w-6 h-6 text-accent-blue"
                />
              </div>
              <h3 className="font-display font-semibold text-navy-800 mb-1">
                {credential.title}
              </h3>
              <p className="text-sm text-navy-600">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}