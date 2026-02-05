import processImg from "../../assets/process-bg.jpg";


export default function Process() {
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
    <section id="process" className="bg-white">
      <div className="container">
        <div className="text-center z-4 relative">
          <h2 className="section-title"> How it works with Bluevolt </h2>
        </div>

        <div className="relative mt-8">
          {/* <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy-200/50 -translate-y-1/2"></div> */}
          {/* <div className="absolute z-1 top-1/2 left-1/2 -translate-1/2 w-full aspect-square bg-radial from-navy-200/50 to-[#28206C]/0 to-60% pointer-events-none"></div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-navy-50 rounded-xl min-h-68 p-6 md:p-8 text-center z-10 relative border border-navy-200 flex flex-col justify-between gap-2 group overflow-hidden">
                  <div>
                    <span className="bg-white text-navy-700 w-10 h-10 flex items-center justify-center rounded-full font-semibold mb-2"> 
                      {step.number} 
                    </span>
                    <h3 className="font-medium text-start text-xl mb-4">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-navy-700 text-start w-full">
                    {step.description}
                  </p>

                  <div className="absolute z-0 inset-0 opacity-8 transition-all duration-400 group-hover:opacity-15 group-hover:scale-110 pointer-events-none">
                    <img
                      src={processImg}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* <div className="flex flex-wrap gap-10 mb-10">
          {steps.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-size-[100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-88 p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  {/* <Arrow /> 
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-navy-600"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {/* {item.imageUrl && ( 
                    <img
                      src={processImg}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  {/* )}
                </div>
              </div>

              {/* <ClipPath /> 
            </div>
           ))} 
        </div> */}
      </div>
    </section>
  )
}