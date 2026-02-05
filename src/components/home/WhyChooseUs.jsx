import feature01 from "../../assets/process-bg.jpg";
import feature02 from "../../assets/feature-01.avif";
import feature03 from "../../assets/feature-02.avif";
import feature04 from "../../assets/feature-03.avif";

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
  ];

  return (
    <section id="why-choose-us" className="z-2 relative">
      <div className="container pb-0!">
        <div className="text-center">
          <h2 className="section-title"> Why Choose Us </h2>
          <p className="section-subtitle">
            We provide the operational insight that only comes from decades of actual offshore experience.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* div1: spans 2 rows, col 1 */}
          <div className="col-span-1 md:row-span-2">
            <div className="flex flex-col gap-4 items-start rounded-xl border border-navy-200 bg-navy-50 h-full p-4">
              <img src={feature01} alt=""className="w-full h-[60%] rounded-lg object-cover" />
              <div className="flex flex-col items-start justify-between gap-2 h-full">
                <h3 className="font-semibold text-xl leading-tight"> 
                  Every survey conducted by certified maritime officers with actual offshore command experience. 
                </h3>
                <button className="btn-primary">
                  Explore Our Services
                </button>
              </div>
            </div>
            {/* <FeatureCard feature={features[0]} /> */}
          </div>

          {/* div2: row 1, col 2 */}
          <div className="col-span-1 md:row-span-1">
            <FeatureCard feature={features[1]} />
          </div>

          {/* div3: row 1, col 3 */}
          <div className="col-span-1 md:row-span-1">
            <FeatureCard feature={features[2]} />
          </div>

          {/* div4: row 2, col 2–3 */}
          <div className="col-span-1 md:col-span-2 md:row-span-1">
            <FeatureCard feature={features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="bg-navy-50 rounded-lg p-6 card-hover border border-navy-200 h-full">
      {feature.icon && (
        <div className="w-full h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mb-4">
          <img src={feature.icon} alt="" className="w-8 h-8 ml-2 mr-auto rounded-full text-accent-blue" />
        </div>
      )}
      <h3 className="font-display font-semibold text-navy-800 text-lg mb-3">
        {feature.title}
      </h3>
      <p className="text-navy-600">{feature.description}</p>
    </div>
  );
}