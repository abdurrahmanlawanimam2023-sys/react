import "./HeroCards.css";

// Right side of the hero: the stacked cards and the two floating labels
export default function HeroCards() {
  return (
    <section className="hero-visual">
      {/* Card behind (tilted left) */}
      <div className="card card-back"></div>

      {/* Card in front (tilted right) */}
      <div className="card card-front">
        <div className="card-top">
          <span>✳ nexalabs</span>
          <span className="card-menu">•••</span>
        </div>

        {/* Purple ring with the letter N */}
        <div className="ring">
          <div className="ring-inner">N</div>
        </div>

        <h3>Built for the future.</h3>
        <p className="card-sub">Creative thinking. Smart technology.</p>

        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <div className="progress-text">
          <span>CREATIVITY</span>
          <span>100%</span>
        </div>
      </div>

      {/* Floating labels */}
      <div className="chip chip-top">✦ Creative ideas</div>
      <div className="chip chip-bottom">↗ Digital solutions</div>
    </section>
  );
}