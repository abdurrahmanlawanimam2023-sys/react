import "./heroText.css";

// Left side of the hero: badge, heading, paragraph, buttons and small note
export default function HeroText() {
  return (
    <section className="hero-text">
      <div className="badge">
        <span className="dot"></span>
        YOUR DIGITAL GROWTH PARTNER
      </div>

      <h1>
        We turn big ideas into <span className="purple">digital reality.</span>
      </h1>

      <p className="subtitle">
        We design beautiful websites, build powerful software, and create
        digital experiences that help businesses grow.
      </p>

      <div className="buttons">
        <a href="#projects" className="btn btn-purple">
          Explore our work <span className="arrow">↗</span>
        </a>
        <a href="#services" className="btn btn-outline">
          What we do
        </a>
      </div>

      <div className="note">
        <div className="note-icon">✳</div>
        <div>
          <strong>Ideas meet innovation.</strong>
          <p>We build for what comes next.</p>
        </div>
      </div>

      <p className="label">
        <span>01</span> — BUILDING WHAT'S NEXT
      </p>
    </section>
  );
}