import React from "react";
import {
  Ship,
  SearchCheck,
  Wrench,
  ShieldCheck,
  Cpu,
  Package,
  GraduationCap
} from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Vessel Brokerage",
    description:
      "We source and place vessels that match the operational requirements of offshore and maritime projects. Our team manages the entire brokerage process from requirement capture to vessel mobilization.",
    items: [
      "Requirement capture and mission-fit analysis",
      "Market scanning and vessel availability checks",
      "Technical specification validation",
      "Commercial comparison and negotiation support",
      "Mobilization readiness input"
    ]
  },
  {
    icon: SearchCheck,
    title: "Technical Readiness Screening & Marine Surveys",
    description:
      "We conduct technical readiness screenings and surveys focused on operational reliability and risk reduction before vessel mobilization.",
    items: [
      "Electrical generation and distribution checks",
      "Automation and alarm monitoring validation",
      "Emergency power and lighting inspection",
      "Fire detection and safety system verification",
      "Maintenance history and documentation review"
    ]
  },
  {
    icon: Wrench,
    title: "Fleet Maintenance Support",
    description:
      "Our maintenance support programs help vessel operators maintain reliability, reduce unplanned downtime, and improve operational performance.",
    items: [
      "Maintenance planning and job pack development",
      "Defect elimination and prioritization",
      "Vendor coordination and repair verification",
      "Commissioning and testing support",
      "Maintenance documentation and reporting"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Risk Reduction & Mobilization Support",
    description:
      "We integrate technical risk assessment early in the vessel selection process to minimize delays, operational failures, and cost overruns.",
    items: [
      "Mission-fit vessel validation",
      "Readiness red-flag identification",
      "Safety compliance verification",
      "Mobilization planning support",
      "Operational documentation checks"
    ]
  },
  {
    icon: Cpu,
    title: "Marine Electrical & Automation Services",
    description:
      "Our certified Electro-Technical Officers provide support for marine electrical systems, automation platforms, and industrial control systems.",
    items: [
      "Marine electrical troubleshooting and repairs",
      "Power management system diagnostics",
      "Automation and control system maintenance",
      "Navigation electronics servicing",
      "Industrial automation integration support"
    ]
  },
  {
    icon: Package,
    title: "Spare Parts Procurement & Vessel Repairs",
    description:
      "Through our network of partners we assist operators with sourcing electrical and mechanical spare parts and coordinating vessel repairs.",
    items: [
      "Procurement of electrical and mechanical spares",
      "Industrial machinery component sourcing",
      "Repair coordination with technical partners",
      "Technical verification of replacement parts"
    ]
  },
  {
    icon: GraduationCap,
    title: "Training & Technical Consultancy",
    description:
      "We provide advisory services and technical training designed to improve crew competence and operational efficiency.",
    items: [
      "Marine electrical systems training",
      "Automation and control systems training",
      "Crew technical competence support",
      "Remote technical advisory services",
      "Inspection and maintenance consultancy"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="container py-16">

      {/* Page Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="section-title">Our Services</h2>
        <p className="text-navy-600 mt-4">
          BlueVoltMarine provides brokerage-first maritime services supported
          by real offshore operational experience. We combine vessel sourcing,
          technical readiness screening, and fleet support to ensure clients
          receive assets that are reliable, safe, and operationally ready.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon className="text-primary" size={24} />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-navy-800">
                {service.title}
              </h3>

              <p className="text-navy-600 text-sm mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 text-sm text-navy-600">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-primary/5 border border-gray-200 rounded-xl p-10">
        <h3 className="text-2xl font-semibold mb-4 text-navy-800">
          Need a Vessel or Technical Support?
        </h3>
        <p className="text-navy-600 max-w-xl mx-auto mb-6">
          Contact our team to discuss your operational requirements. We help
          asset owners source mission-fit vessels and ensure they are
          technically ready for safe and reliable operations.
        </p>

        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition"
        >
          Contact Our Team
        </a>
      </div>

    </section>
  );
};

export default Services;