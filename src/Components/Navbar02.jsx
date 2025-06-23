import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './ComponentsStyles/Navbar02.css';
import ServiceList from "../DB/AllServicesList";

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showPrimary, setShowPrimary] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowPrimary(true);
        setIsSticky(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowPrimary(false);
        setIsSticky(true);
      } else {
        // Scrolling up
        setShowPrimary(true);
        setIsSticky(true); // ❗️IMPORTANT: keep sticky on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`secondary-navbar ${isSticky
        ? showPrimary
          ? 'sticky with-primary'
          : 'sticky no-primary'
        : 'below-primary'
      }`}>
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
        <li><Link to="#">About Us</Link></li>
        <li><Link to="#">Contact</Link></li>

        <li className="dropdown">
          <span>Login ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNavbar;
