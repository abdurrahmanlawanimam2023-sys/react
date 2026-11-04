import "./contact.css";

// The big "call to action" before the footer
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="contact-eyebrow">HAVE AN IDEA?</p>

        <h2>
          Let's build something <span>remarkable.</span>
        </h2>

        {/* Change the email below to your real one */}
        <a
          href="mailto:hello@example.com"
          className="btn btn-purple contact-button"
        >
          Start a conversation <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}