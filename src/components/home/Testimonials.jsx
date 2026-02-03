export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Their Chief Engineer\'s assessment of our PSV machinery identified maintenance issues our own team had missed. Practical recommendations saved us significant downtime.',
      author: 'Technical Manager',
      company: 'Offshore Drilling Contractor',
    },
    {
      quote: 'The vessel condition survey was thorough and operationally focused. Their Master\'s understanding of offshore operations added value beyond standard compliance checks.',
      author: 'Marine Superintendent',
      company: 'Oil & Gas Super Major',
    },
    {
      quote: 'Independent, technically rigorous assessments with clear reporting. Their officer-led approach provides credibility with our internal stakeholders.',
      author: 'Asset Manager',
      company: 'Vessel Chartering Company',
    },
  ]

  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Endorsements</h2>
          <p className="section-subtitle">
            Trusted by technical managers and marine superintendents in the offshore industry.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-navy-50 rounded-lg p-8 border border-navy-200"
            >
              <div className="mb-6">
                <div className="text-accent-amber text-2xl">"</div>
                <p className="text-navy-700 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-navy-200 pt-6">
                <div className="font-display font-semibold text-navy-800">
                  {testimonial.author}
                </div>
                <div className="text-navy-600 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}