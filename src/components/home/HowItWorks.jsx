import processImg from "../../assets/process-bg.jpg";


export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Request Vessel',
      description: 'Submit vessel details including vessel type, location, and job scope requirements.',
    },
    {
      number: '02',
      title: 'Review & Survey',
      description: 'Our Officers review requirements and recommend appropriate vessel.',
    },
    // {
    //   number: '03',
    //   title: 'Survey',
    //   description: 'On-site assessment by certified officers with relevant operational experience.',
    // },
    {
      number: '03',
      title: 'Report',
      description: 'Detailed report with findings, compliance status, and practical recommendations.',
    },
  ]

  return (
    <section id="process" className="container bg-primary text-white overflow-hidden relative">
      <h2 className="section-title text-white!"> How it works with Bluevolt </h2>

      <div className="relative">
        <div className="block absolute top-1/2 left-0 right-0 h-px bg-navy-300 -translate-y-1/2"></div>
        {/* <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-full aspect-square bg-radial from-navy-200 to-[#28206C] to-60% pointer-events-none"></div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-primary rounded-lg min-h-68 p-6 md:p-8 text-center z-10 relative! border border-navy-200/40 flex flex-col justify-between gap-2 group overflow-hidden">
                <div>
                  <span className="bg-white text-primary w-10 h-10 flex items-center justify-center rounded-full font-semibold mb-2"> 
                    {step.number} 
                  </span>
                  <h3 className="font-medium text-start text-xl mb-4">
                    {step.title}
                  </h3>
                </div>

                <p className="text-navy-200 text-start w-full">
                  {step.description}
                </p>

                <div className="absolute z-0 inset-0 opacity-10 transition-all duration-400 group-hover:opacity-20 group-hover:scale-110 pointer-events-none">
                  <img
                    src={processImg}
                    width={380}
                    height={362}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}