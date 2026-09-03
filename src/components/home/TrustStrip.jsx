import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

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
    <ScrollReveal direction="up" delay={0.2}>
      <section className="container py-8! text-primary">
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-200">
          {credentials.map((credential, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={0.1 * index}
              distance={30}
              className="text-start w-full bg-white p-4 odd:pl-0! lg:nth-[3]:pl-4!"
            >
              <h3 className="font-bold mb-1">
                {credential.title}
              </h3>
              <p className="text-xs sm:text-sm">
                {credential.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}