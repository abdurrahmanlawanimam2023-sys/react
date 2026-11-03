import "./ServiceCard.css";

// One card. The words inside { } are the "props": the data it receives from Services.jsx.
export default function ServiceCard({ number, icon, title, text, tag }) {
  return (
    <article className="service-card">
      {/* Top row: icon on the left, number on the right */}
      <div className="service-top">
        <div className="service-icon">{icon}</div>
        <span className="service-number">{number}</span>
      </div>

      <h3>{title}</h3>
      <p className="service-text">{text}</p>

      {/* Bottom row: small label on the left, arrow on the right */}
      <div className="service-footer">
        <span className="service-tag">{tag}</span>
        <span className="service-arrow">↗</span>
      </div>
    </article>
  );
}