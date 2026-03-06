import ScrollReveal, { StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import feature01 from "../../assets/feature/feature-01.jpg";
import feature02 from "../../assets/feature/feature-02.avif";
import feature03 from "../../assets/feature/feature-03.avif";
import feature04 from "../../assets/feature/feature-04.avif";

export default function WhyChooseUs() {
  const features = [
    {
      icon: feature01,
      title: 'Officer-Led Surveys',
      description:
        'Every survey conducted by certified maritime officers with actual offshore command experience.',
    },
    {
      icon: feature02,
      title: 'Independent Assessments',
      description:
        'Unbiased evaluations with no conflicts of interest. Our findings are based solely on technical merit.',
    },
    {
      icon: feature03,
      title: 'Fast, Accurate Reporting',
      description:
        'Detailed reports delivered within agreed timelines, with clear findings and actionable recommendations.',
    },
    {
      icon: feature04,
      title: 'Practical Recommendations',
      description:
        'Operationally focused advice that considers both technical requirements and commercial realities.',
    },
    {
      icon: feature04,
      title: 'Field Experienced',
      description:
        'Operationally focused advice that considers both technical requirements and commercial realities.',
    },
  ];

  return (
    <ScrollReveal direction="up" threshold={0.2}>
      <section id="why-choose-us" className="container z-2 relative">
        <ScrollReveal direction="left" delay={0.2}>
          <div className="text-start">
            <h2 className="section-title"> Why Choose Us </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15} delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">
            {/* div1: spans 2 rows, col 1 */}
            <StaggerItem direction="up" className="col-span-1 md:row-span-2">
              <div className="flex flex-col gap-4 items-start rounded-md border border-navy-200 bg-primary/5 h-full p-4">
                <img src={feature01} alt="" className="w-full h-[60%] rounded-lg object-cover" />
                <div className="flex flex-col items-start justify-between gap-2 h-full">
                  <h3 className="font-semibold text-xl leading-tight"> 
                    Every survey conducted by certified maritime officers with actual offshore command experience. 
                  </h3>
                  <button className="btn-primary">
                    Explore Our Services
                  </button>
                </div>
              </div>
            </StaggerItem>

            {/* div2: row 1, col 2 */}
            <StaggerItem direction="up" className="col-span-1 md:row-span-1">
              <FeatureCard feature={features[1]} />
            </StaggerItem>

            {/* div3: row 1, col 3 */}
            <StaggerItem direction="up" className="col-span-1 md:row-span-1">
              <FeatureCard feature={features[2]} />
            </StaggerItem>

            {/* div4: row 2, col 2 */}
            <StaggerItem direction="up" className="col-span-1 md:col-span-1 md:row-span-1">
              <FeatureCard feature={features[3]} />
            </StaggerItem>

            {/* div5: row 2, col 3 */}
            <StaggerItem direction="up" className="col-span-1 md:col-span-1 md:row-span-1">
              <FeatureCard feature={features[4]} />
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>
    </ScrollReveal>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="bg-primary/5 rounded-md p-4 md:p-6 card-hover border border-navy-200 h-full">
      {feature.icon && (
        <div className="w-full h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
          <img src={feature.icon} alt="" className="w-8 h-8 ml-2 mr-auto rounded-full text-accent-blue" />
        </div>
      )}
      <h3 className="font-display font-semibold text-primary text-lg mb-3">
        {feature.title}
      </h3>
      <p className="text-primary/80">{feature.description}</p>
    </div>
  );
}