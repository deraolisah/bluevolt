import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

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
  ];

  return (
    <ScrollReveal direction="up" threshold={0.2}>
      <section className='container flex flex-col md:flex-row'>
        <ScrollReveal direction="right" delay={0.2} className='flex w-full md:w-1/4'>
          <h2 className='section-title'> Who We Serve </h2>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3} className='flex flex-col-reverse sm:flex-col w-full md:w-3/4 gap-2 space-y-4'>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {industries.map((industry, index) => (
                <StaggerItem key={index} direction="up">
                  <div 
                    className="bg-primary/5 rounded-sm p-2 sm:p-4 text-center hover:bg-navy-100 transition-colors duration-200 border border-navy-200"
                  >
                    <div className="font-normal text-start text-sm sm:text-base">
                      {industry}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="max-w-3xl text-sm sm:text-lg">
              We serve leading companies in the offshore and maritime sectors, providing vessels and technical assessments they can trust.
            </p>
          </ScrollReveal>
        </ScrollReveal>
      </section>
    </ScrollReveal>
  );
}