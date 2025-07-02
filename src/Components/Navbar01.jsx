import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneFill, BsSearch } from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdCalendarToday } from 'react-icons/md';
import './ComponentsStyles/Navbar01.css';
import logo from '../Assets/logo.png';
import CountrySelector from './CountrySelector';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 0) {
                setScrolled(true); 
                setAtTop(true);
            } else if (currentScrollY > lastScrollY) {
                setScrolled(false); 
                setAtTop(false);
            } else {
                setScrolled(true);
                setAtTop(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBookAppointment = (e) =>{
        e.preventDefault();
        alert(`This feature is under development. The booking system will be available shortly.`);
    }


    return (
        <div className={`NavbarDiv ${atTop ? 'atthetop' : ''} ${scrolled ? '' : 'navbar-hidden'}`}>
            <div className="leftNavSection">
                <div className="logoSection">
                    <img src={logo} alt="logo" />
                </div>
                <div className="playStoreSection">
                    <div className="buttons">
                        <Link to="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></Link>
                        <Link to="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" /></Link>
                    </div>
                </div>
                <div className="contactSection">
                    <BsTelephoneFill style={{ fontSize: '1.2rem', color: "#0fb7a4", paddingTop: "0.5rem" }} />
                    <div className="phoneNumbers">
                        <p>033-4085 4085</p>
                        <p>033-3382 3382</p>
                    </div>
                    <div className="mailId">
                        <FaEnvelope style={{ fontSize: '1.2rem', color: "#0fb7a4", marginRight: "0.5rem" }} />
                        <p> info@rbdiagnostics.com</p>
                    </div>
                </div>
            </div>

            <div className="rightNavSection">
                <div className="rightLeftSection">
                   <CountrySelector/>
                </div>
                <div className="rightButtonSection">
                    <button><span className="btn-text" onClick={handleBookAppointment}><MdCalendarToday /> Make an Appointment</span></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
