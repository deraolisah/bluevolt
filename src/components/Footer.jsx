import Lloyd from "../assets/Lloyd.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-display font-bold mb-6">
              Bluevolt Marine
            </h3>
            <p className="text-navy-200 mb-6">
              Certified maritime officers providing independent surveys and vessel brokerage services to the offshore industry. Lloyd's Maritime Academy certified Masters, Chief Engineers, and ETOs with decades of operational experience.
            </p>
            <div className="flex items-center gap-4">
              <img src={Lloyd} alt="" className="w-20" />
              <img src={Lloyd} alt="" className="w-20" />
              <img src={Lloyd} alt="" className="w-20" />

              {/* <div className="px-4 py-2 bg-navy-800 rounded border border-navy-700">
                <span className="text-sm text-navy-200">Lloyd's Certified</span>
              </div> */}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Contact Information
            </h4>
            <div className="space-y-4 text-navy-200">
              <p>For survey requests and vessel inquiries</p>
              <p>
                <span className="font-medium">Response Time:</span> Within 24 hours
              </p>
              <p>
                <span className="font-medium">Services:</span> Nation-Wide
              </p>
              <p className="pt-4">
                All surveys conducted by certified maritime officers with relevant offshore experience.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-navy-400">
          <p>
            © {currentYear} Bluevolt Marine. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Independent maritime survey and vessel brokerage services.
          </p>
        </div>
      </div>
    </footer>
  )
}