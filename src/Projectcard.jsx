import "./ProjectCard.css";

// One project card. The words inside { } are the "props" received from Projects.jsx.
export default function ProjectCard({ counter, letter, theme, tag, title, text }) {
  return (
    <article className="project-card">
      {/* Colored top part. The theme word ("purple" or "green") becomes a second class. */}
      <div className={`project-visual ${theme}`}>
        <span className="project-counter">{counter}</span>
        <span className="project-letter">{letter}</span>
      </div>

      {/* White-on-dark text part at the bottom */}
      <div className="project-info">
        <div>
          <p className="project-tag">{tag}</p>
          <h3>{title}</h3>
          <p className="project-text">{text}</p>
        </div>

        <a href="#contact" className="project-button" aria-label={`Open ${title}`}>
          ↗
        </a>
      </div>
    </article>
  );
}