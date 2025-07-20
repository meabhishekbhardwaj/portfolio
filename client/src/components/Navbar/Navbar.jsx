import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };
  const handleMenuToggle = () => {
    console.log("isMenuOpen", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="name">
          Abhishek<span>.</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="works"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Contact Me
            </Link>
          </li>
        </ul>
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
      </nav>
    </header>
  );
};

export default Navbar;
