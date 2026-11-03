import "./Projects.css";
import ProjectCard from "./projectcard";

// The data for the two project cards. "theme" picks the color (purple or green).
const projects = [
  {
    counter: "01 / 02",
    letter: "F.",
    theme: "purple",
    tag: "WEB APPLICATION",
    title: "Finora Finance",
    text: "A cleaner way to manage your money.",
  },
  {
    counter: "02 / 02",
    letter: "H.",
    theme: "green",
    tag: "DIGITAL MARKETPLACE",
    title: "Harvest Hub",
    text: "Connecting producers with new opportunities.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* Top part: heading on the left, short text on the right */}
        <div className="projects-head">
          <div>
            <p className="projects-eyebrow">SELECTED WORK</p>
            <h2>
              Small details. <span>Big impact.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A few concept projects showing how thoughtful design and technology
            can work together.
          </p>
        </div>

        {/* Cards: one for each item in the list above */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Small note at the bottom */}
        <p className="projects-note">
          <span>✦</span> These are concept projects created for demonstration.
        </p>
      </div>
    </section>
  );
}