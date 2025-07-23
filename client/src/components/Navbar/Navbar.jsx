import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { to: "hero", label: "Home" },
    { to: "services", label: "Services" },
    { to: "works", label: "Works" },
    { to: "about", label: "About Me" },
    { to: "contact", label: "Contact Me" },
  ];
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="name">
            Abhishek<span>.</span>
          </div>
          <div className="right-buttons">
            <button
              className="menu-toggle"
              onClick={handleMenuToggle}
              aria-label="menu-toggle"
            >
              ☰
            </button>
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              🌓
            </button>
          </div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
