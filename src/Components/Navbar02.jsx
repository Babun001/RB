import { useState } from "react";
import { Link } from "react-router-dom";
import './ComponentsStyles/Navbar02.css';

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="secondary-navbar">
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

        <li className="dropdown">
          <span>Health Package ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/OurPackagesPage">Basic Package</Link></li>
            <li><Link to="#">Advanced Package</Link></li>
            <li><Link to="#">Custom Package</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Health Problems ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="#">Diabetes</Link></li>
            <li><Link to="#">Thyroid</Link></li>
            <li><Link to="#">Heart Issues</Link></li>
          </ul>
        </li>

        <li><Link to="/doctors-grid">OPD</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/corporate-wellness">Corporate Wellness</Link></li>

        <li className="dropdown">
          <span>About ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="#">Company</Link></li>
            <li><Link to="#">Team</Link></li>
            <li><Link to="#">Careers</Link></li>
          </ul>
        </li>

        <li><Link to="#">Contact</Link></li>

        <li className="dropdown">
          <span>Login ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="#">User Login</Link></li>
            <li><Link to="#">Admin Login</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
