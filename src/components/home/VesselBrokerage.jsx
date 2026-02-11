export default function VesselBrokerage() {
  const vesselTypes = [
    'PSV (Platform Supply Vessel)',
    'AHTS (Anchor Handling Tug Supply)',
    'MPSV (Multi-Purpose Support Vessel)',
    'Crew Boats',
    'Survey Vessels',
    'Standby Safety Vessels',
    'ROV Support Vessels',
    'Drilling Rigs',
  ]

  return (
    <section id="vessel-brokerage" className="bg-navy-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Vessel Brokerage Services</h2>
            <p className="text-lg text-navy-600 mb-6">
              We source and vet offshore vessels based on operational requirements and technical specifications. Our officer-led assessments ensure vessel suitability for specific offshore applications.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-navy-600">
                Our network includes vessel owners, operators, and charter markets worldwide. We provide technical due diligence, market analysis, and negotiation support.
              </p>
              <p className="text-navy-600">
                Whether for charter, purchase, or long-term lease, we ensure vessels meet operational, safety, and compliance standards.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              {/* <img 
                src="/icons/vessel.svg" 
                alt="" 
                className="w-5 h-5 mr-2"
              /> */}
              Request A Vessel
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="font-display font-semibold text-navy-800 text-xl mb-6">
              Vessel Types
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vesselTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 bg-navy-50 rounded border border-navy-200"
                >
                  <div className="w-2 h-2 bg-accent-blue rounded-full mr-3"></div>
                  <span className="text-navy-700">{type}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-accent-blue/5 rounded border border-accent-blue/20">
              <p className="text-navy-700">
                <span className="font-semibold">Note:</span> Please specify vessel type, operational area, duration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}