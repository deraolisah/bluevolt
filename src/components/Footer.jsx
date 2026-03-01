// import Lloyd from "../assets/Lloyd.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-display font-bold mb-6">
              BlueVoltMarine
            </h3>
            
            <p className="text-navy-300 text-sm leading-loose md:leading-normal">
              BlueVoltMarine is a brokerage-first maritime services company built from the deck plate up by experienced maritime officers. We combine commercial vessel sourcing with practical maritime judgement and technical readiness awareness, so clients receive assets that are fit-for-purpose and prepared for safe, reliable operations.
            </p>

            {/* <p className="text-navy-200 mb-6">
              Recognized by:
            </p> */}
            {/* <div className="flex items-center gap-4">
              <img src={Lloyd} alt="" className="w-20 rounded-full rounded-tl-none" />
            </div> */}
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6"> Quick Links </h4>
            <ul className="fex flex-col items-start space-y-2 text-navy-200 text-sm">
              <li> Home </li>
              <li> About Us </li>
              <li> Services </li>
              <li> Contact Us </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Company
            </h4>
            <div className="space-y-2 text-navy-200 text-sm">
              <p>
                <span className="font-bold"> Phone: </span> 
              </p>
              <p>
                <span className="font-bold"> Email: </span> 
                info@bluevoltmarine.com
              </p>
              <p>
                <span className="font-bold"> Address: </span> 
                6th Floor, No 1 Akin Adesola Street, Victoria Island, Lagos Nigeria. 101241
              </p>
              <p>
                <span className="font-bold">Services:</span> Nation-Wide
              </p>
            </div>
          </div>


          <div>
            <h4 className="font-semibold text-lg mb-6"> Legal </h4>
            <ul className="flex flex-col items-start space-y-2 text-navy-200 text-sm">
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
          <p> 
            REG NO: RC9268505
          </p>
        </div>
      </div>
    </footer>
  )
}