export default function TrustStrip() {
  const credentials = [
    {
      title: 'All Ranks Certified',
      description: 'Masters, Chief Engineers, ETOs',
    },
    {
      title: 'Offshore Proven',
      description: 'Oil & Gas Experience',
    },
    {
      title: 'Offshore Proven',
      description: 'Cruise Experience',
    },
    {
      title: 'Intl. Maritime Standards',
      description: 'Full Compliance',
    },
  ]

  return (
    <div className="bg-white text-navy-700">
      <div className="section-container py-4!">
        <div className="overflow-x-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center w-full">
              <h3 className="font-bold mb-1">
                {credential.title}
              </h3>
              <p className="text-xs sm:text-sm">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}