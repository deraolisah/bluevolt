export default function Testimonials() {
  const testimonials = [
    {
      quote: 'BlueVoltMarine is built on real maritime exposure, not theory. Our foundation comes from certified maritime professionals with practical offshore experience, giving us a strong appreciation of vessel operations, technical realities, and the importance of sound judgment in high-value decisions.',
      title: 'Offshore experience that informs every engagement',
    },
    {
      quote: 'With ETO-led technical perspective and officer-informed industry understanding, we bring a balanced view to every assignment. This allows us to engage with vessel matters in a way that is practical, credible, and aligned with the expectations of  serious offshore stakeholders.',
      title: 'A technically grounded and commercially aware approach*',
    },
    {
      quote: 'While BlueVoltMarine is growing, the thinking behind it is rooted in real-world maritime experience. We aim to provide dependable support marked by professionalism, clarity, and an understanding of what technical managers, marine superintendents, and industry partners truly value.',
      title: 'Emerging company, experienced foundation',
    },
  ]

  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title leading-normal">  Our Foundation <br/> A 100% Nigerian owned Emerging company, </h2>
          {/* <p className="section-subtitle">
            Trusted by technical managers and marine superintendents in the offshore industry.
          </p> */}
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-navy-50 rounded-lg p-8 border border-navy-200">
              <div className="space-y-6">
                <div className="">
                  <div className="font-display font-semibold text-navy-800">
                    {testimonial.title}
                  </div>
                  {/* <div className="text-navy-600 text-sm">
                    {testimonial.company}
                  </div> */}
                </div>
                <hr className="w-full bg-gray-400 border-0 h-px" />
                <p className="text-navy-700 italic">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}