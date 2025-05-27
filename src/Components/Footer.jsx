import './ComponentsStyles/Footer.css';
import logo2 from '../Assets/logo2.png'
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa';

export default function FooterSection() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">

                    <div className="footer-left">
                        <img src={logo2} alt="RB Logo" className="logo" />
                        <h3 className='headingText'>Short Links</h3>
                        <div className="underLine"></div>
                        <div className="short-links">
                            <ul>
                                <li>News</li>
                                <li>Overview</li>
                                <li>Contact</li>
                                <li>Disclaimer</li>
                            </ul>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy & Policy</li>
                                <li>Payment & Refund Policy</li>
                                <li>Account Deletion Request</li>
                            </ul>
                            <ul>
                                <li>Centers</li>
                                <li>Career</li>
                                <li>Radiology Images</li>
                                <li>Online Report</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="contactDiv">
                            <h3 className='headingText'>Contact Us</h3>
                            <div className="underLine"></div>
                        </div>

                        <ul className="contact-info">
                            <li><FaPhoneAlt /> 033-4085 4085 / 033-3382 3382</li>
                            <li><FaEnvelope /> info@rbdiagnostics.com</li>
                            <li><FaMapMarkerAlt /> R B Diagnostics (P) Ltd, P-846 Block A, Lake Town, Kolkata-700089<br />
                                Landmark: Near Bank Of Baroda Laketown</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-icons">
                        <FaFacebook size={40}/>
                        <FaTwitter size={40}/>
                        <FaLinkedin size={40}/>
                        <FaYoutube size={40}/>
                    </div>
                    <p>
                        © Copyright @2021 RB Diagnostic Pvt. Ltd. (India) <br />
                        Designed & Developed by Infymax Solutions Pvt. Ltd.
                    </p>
                </div>
            </footer>
        </>
    )
}