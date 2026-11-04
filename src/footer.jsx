import "./footer.css";

export default function Footer() {
  // Gets the current year from the computer, so you never have to update it by hand
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Left: logo */}
        <a href="#home" className="footer-logo">
          nexa<span>.</span>
        </a>

        {/* Middle: tagline */}
        <p className="footer-tagline">Creative minds. Meaningful technology.</p>

        {/* Right: copyright */}
        <p className="footer-copy">© {year} Nexa Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}