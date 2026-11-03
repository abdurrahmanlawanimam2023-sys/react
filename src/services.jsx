import "./Services.css";
import ServiceCard from "./ServiceCard";

// The data for the three cards. To add a fourth card, add one more block here.
const services = [
  {
    number: "01",
    icon: "✳",
    title: "Web Development",
    text: "Fast, responsive and beautiful websites that turn visitors into customers.",
    tag: "WEBSITES & WEB APPS",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Software Solutions",
    text: "Smart digital tools that simplify your work and solve real business problems.",
    tag: "CUSTOM SOFTWARE",
  },
  {
    number: "03",
    icon: "◈",
    title: "UI/UX Design",
    text: "Thoughtful, user-friendly designs that make every digital interaction feel easy.",
    tag: "DESIGN & EXPERIENCE",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        {/* Top part: heading on the left, short text on the right */}
        <div className="services-head">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              Good ideas deserve <span>great execution.</span>
            </h2>
          </div>

          <p className="services-intro">
            From the first sketch to the final product, we help you bring your
            vision to life.
          </p>
        </div>

        {/* Bottom part: one card for each item in the list above */}
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}