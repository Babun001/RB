import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ComponentsStyles/Navbar02.css';
import ServiceList from "../DB/AllServicesList";

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`secondary-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">✕</span>
        ) : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Home Collection</Link></li>
        <li><Link to="/view-reports">View Report</Link></li>
        <li><Link to="/OurPackagesPage">Health Package</Link></li>

        <li className="dropdown">
          <span>Services ▾</span>
          <ul className="dropdown-menu">
            {
              ServiceList.map((svs, inds) => (
                <li key={inds}><Link to={`/service/${svs.path}`}>{svs.name}</Link></li>
              ))
            }
          </ul>
        </li>

        <li><Link to="/doctors-grid">OPD</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/corporate-wellness">Corporate Wellness</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>

        <li className="dropdown">
          <span>Login ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
