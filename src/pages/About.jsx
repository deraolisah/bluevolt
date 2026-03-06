// const About = () => {
//   return (
//     <section className="container py-16">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <div>
//           <h2 className="section-title">About BlueVoltMarine</h2>

//           <div className="space-y-4 text-navy-600 mt-6">
//             <p>
//               BlueVoltMarine is a brokerage-first maritime services company
//               built from the deck plate up. We specialize in sourcing and
//               positioning offshore vessels while ensuring technical readiness
//               for safe and reliable operations.
//             </p>

//             <p>
//               Our approach combines commercial vessel brokerage with real
//               offshore operational experience. By integrating technical
//               readiness screening and practical maritime judgement into the
//               brokerage process, we help asset owners avoid costly delays,
//               reduce operational risks, and ensure mission-fit vessel
//               selection.
//             </p>

//             <p>
//               BlueVoltMarine is led by certified sea-going Electro-Technical
//               Officers (ETOs) with decades of combined offshore and maritime
//               experience across multiple vessel classes and operating regions
//               including Africa, the Middle East, Europe, and North America.
//             </p>

//             <p>
//               Our network includes vessel owners, operators, and maritime
//               specialists worldwide, allowing us to support offshore projects
//               with reliable vessel sourcing, technical assessments, and fleet
//               support services.
//             </p>
//           </div>
//         </div>

//         {/* Right Content Card */}
//         <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
//           <div className="space-y-8">

//             <div>
//               <h4 className="font-display font-semibold text-navy-800 mb-2">
//                 Our Vision
//               </h4>
//               <p className="text-navy-600">
//                 To become a trusted maritime services partner known for speed,
//                 transparency, and technically credible outcomes across global
//                 offshore operations.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-display font-semibold text-navy-800 mb-2">
//                 Our Mission
//               </h4>
//               <p className="text-navy-600">
//                 To deliver brokerage-led maritime solutions that secure the
//                 right vessels, reduce downtime risk through technical readiness
//                 screening, and execute projects with safety, accountability,
//                 and operational discipline.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-display font-semibold text-navy-800 mb-2">
//                 What We Do
//               </h4>
//               <p className="text-navy-600">
//                 We specialize in vessel brokerage, technical readiness
//                 screening, fleet maintenance support, and marine electrical
//                 and automation systems services for offshore and maritime
//                 operators.
//               </p>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;


import { Globe, Anchor, ShieldCheck, Users, User } from "lucide-react";

const About = () => {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="section-title"> About Us </h2>
          <div className="space-y-4 text-navy-600">
            <p>
              BlueVoltMarine is a brokerage-first maritime services company built from the deck plate up.
            </p>
            <p>
              We combine commercial vessel sourcing with practical offshore/maritime judgement and technical readiness and awareness, so clients receive assets that are fit-for-purpose and prepared for safe, reliable operations.
            </p>
            <p>
              Our team consists of two sea-going ETOs with extensive, decade-long experience certified by Lloyd's Maritime Academy.
            </p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-display font-semibold text-navy-800"> Our Vison </h4>
              <p className="text-navy-600">
                To become a trusted maritime services partner known for speed, transparency, and technically credible outcomes.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy-800"> Our Mission </h4>
              <p className="text-navy-600">
                To deliver brokerage led solutions that secure the right vessel, reduce downtime risk through readiness screening, and execute with safety and accountability.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy-800"> What we do </h4>
              <p className="text-navy-600">Specialists in vessel electrical systems, automation, and emergency power systems.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Credibility Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* <Anchor /> */}
          <h3 className="text-3xl font-bold text-primary">30+</h3>
          <p className="text-navy-600 mt-2 text-sm">
            Years Combined Offshore Experience
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* <Globe /> */}
          <h3 className="text-3xl font-bold text-primary">Global</h3>
          <p className="text-navy-600 mt-2 text-sm">
            Vessel Network & Market Access
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* <Users /> */}
          <h3 className="text-3xl font-bold text-primary">ETOs</h3>
          <p className="text-navy-600 mt-2 text-sm">
            Certified Technical Leadership
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          {/* <ShieldCheck /> */}
          <h3 className="text-3xl font-bold text-primary">5+</h3>
          <p className="text-navy-600 mt-2 text-sm">
            Global Operating Regions
          </p>
        </div>

      </div>
    </section>
  )
}

export default About;