import Lloyd from "../assets/Lloyd.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-display font-bold mb-6">
              Bluevolt Marine
            </h3>
            <p className="text-navy-200 mb-6">
              Recognized by:
            </p>
            <div className="flex items-center gap-4">
              <img src={Lloyd} alt="" className="w-20 rounded-full rounded-tl-none" />
              {/* <img src={Lloyd} alt="" className="w-20 rotate-90 rounded-full rounded-tl-none" /> */}
              {/* <img src={Lloyd} alt="" className="w-20 rotate-180 rounded-full rounded-tl-none" /> */}

              {/* <div className="px-4 py-2 bg-navy-800 rounded border border-navy-700">
                <span className="text-sm text-navy-200">Lloyd's Certified</span>
              </div> */}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6"> Quick Links </h4>
            <ul className="fex flex-col items-start space-y-2 text-navy-200">
              <li> About Us </li>
              <li> Contact Us </li>
              <li> Clients </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Company
            </h4>
            <div className="space-y-2 text-navy-200">
              <p>
                <span className="font-medium"> Phone: </span> 
              </p>
              <p>
                <span className="font-medium"> Email: </span> 
              </p>
              <p>
                <span className="font-medium">Response Time:</span> Within 24 hours
              </p>
              <p>
                <span className="font-medium">Services:</span> Nation-Wide
              </p>
            </div>
          </div>


          <div>
            <h4 className="font-semibold text-lg mb-6"> Legal </h4>
            <ul className="fex flex-col items-start space-y-2 text-navy-200">
              <li> Terms of Service </li>
              <li> Privacy Policies </li>
            </ul>
          </div>
        </div>

        <hr  className="border-0.5 border-navy-500 my-12"/>

        <div className="text-center text-navy-400 space-y-4">
          <p>
            © {currentYear} Bluevolt Marine. All rights reserved.
          </p>
          <p className="">
            Vessel Brokerage Powered by Field Experience.
          </p>
        </div>
      </div>
    </footer>
  )
}