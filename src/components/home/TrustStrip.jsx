export default function TrustStrip() {
  const credentials = [
    {
      title: 'Globally Certified',
      description: 'Electro-Technical Officers',
    },
    {
      title: 'Offshore Proven',
      description: 'Oil & Gas Experience',
    },
    {
      title: 'Technical Readiness',
      description: 'Decades of Maritime Experience',
    },
    {
      title: 'Intl. Maritime Standards',
      description: 'Full Compliance',
    },
  ]

  return (
    <section className="container py-8! text-primary">
      <div className="overflow-x-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200">
        {credentials.map((credential, index) => (
          <div key={index} className="text-start w-full bg-white p-4 odd:pl-0! lg:nth-[3]:pl-4! ">
            <h3 className="font-bold mb-1">
              {credential.title}
            </h3>
            <p className="text-xs sm:text-sm">
              {credential.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}