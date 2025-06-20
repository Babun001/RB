import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTelephoneFill, BsSearch } from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdCalendarToday } from 'react-icons/md';
import './ComponentsStyles/Navbar01.css';
import logo from '../Assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`NavbarDiv ${scrolled ? 'navbar-scrolled' : ''}`}>
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
                    <BsSearch style={{ fontSize: '1.5rem', color: 'black' }} />
                    <div className='barDiv'></div>
                    <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: 'black' }} />
                </div>
                <div className="rightButtonSection">
                    <button><MdCalendarToday /> Make an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
