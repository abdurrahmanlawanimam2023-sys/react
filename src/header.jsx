import "./Header.css";

// The menu links live in a list, so adding a new link is just one new line
const navLinks = ["Home", "Services", "Projects"];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
            {/* Logo */}
            <a href="#home" className="logo">
                nexa<span>.</span>
            </a>

            {/* Menu in the middle */}
                <nav className="nav">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`}>
                        {link}
                        </a>
                         ))}
                </nav>

                {/* Button on the right */}
                <a href="#contact" className="btn btn-outline">
                    Let's Talk <span className="arrow">↗</span>
                </a>
        </div>
    </header>
  );
}