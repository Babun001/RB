import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ add useLocation
import './ComponentsStyles/Navbar02.css';
import ServiceList from "../DB/AllServicesList";

const SecondaryNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showPrimary, setShowPrimary] = useState(true);
  const location = useLocation(); // ✅ get current URL path

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowPrimary(true);
        setIsSticky(false);
      } else if (currentScrollY > lastScrollY) {
        setShowPrimary(false);
        setIsSticky(true);
      } else {
        setShowPrimary(true);
        setIsSticky(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`secondary-navbar ${isSticky
      ? showPrimary ? 'sticky with-primary' : 'sticky no-primary'
      : 'below-primary'
      }`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <span className="close-icon">✕</span> : (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        )}
      </div>


      {/* 

/view-reports

*/}
      <ul className={`nav-menu ${menuOpen ? "open" : ""} ${isSticky ? "scrolled" : ""}`}>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/collection" className={location.pathname === '/collection' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home Collection</Link></li>
        <li><Link to="#" className={location.pathname === '/view-reports' ? 'active' : ''} >View Report</Link></li>
        <li><Link to="/OurPackagesPage" className={location.pathname === '/OurPackagesPage' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Health Package</Link></li>

        <li className="dropdown">
          <span>Services ▾</span>
          <ul className="dropdown-menu">
            {ServiceList.map((svs, i) => (
              <li key={i}>
                <Link
                  to={`/service/${svs.path}`}
                  className={location.pathname === `/service/${svs.path}` ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {svs.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        {/* 


/about-us
/contact-us
*/}

        <li><Link to="/doctors-grid" className={location.pathname === '/doctors-grid' ? 'active' : ''} onClick={() => setMenuOpen(false)}>OPD</Link></li>
        <li><Link to="/faqs" className={location.pathname === '/faqs' ? 'active' : ''} onClick={() => setMenuOpen(false)}>FAQs</Link></li>
        <li><Link to="/corporate-wellness" className={location.pathname === '/corporate-wellness' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Corporate Wellness</Link></li>
        <li><Link to="" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
        <li><Link to="/contact-us" className={location.pathname === '/contact' ? 'active' : ''}onClick={() => setMenuOpen(false)}>Contact</Link></li>

{/* 

/login
/registration
*/}

        <li className="dropdown">
          <span>Login ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="#" className={location.pathname === '/login' ? 'active' : ''}>Login</Link></li>
            <li><Link to="" className={location.pathname === '/registration' ? 'active' : ''}>Registration</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNavbar;
