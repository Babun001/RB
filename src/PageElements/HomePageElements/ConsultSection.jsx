import './HomePageCss/ConsultSection.css';
import docImg from '../../Assets/Doctor1.png';

export default function ConsultSection() {
    return (
        <>
            <div className="consult-section">
                <div className="backgroundDiv"></div>
                <div className="consult-image">
                    <img src={docImg} alt="Consultation" />
                </div>

                <div className="consult-text">
                    <h2>Consult with Our Doctor</h2>
                    <p>Get profeddional medical guidance and follow-up support from our experienced doctors, anytime you need.</p>
                    <h4>Contact Us</h4>
                    <p>+91 XXXXXXXXXX</p>
                    <p>+91 XXXXXXXXXX</p>
                </div>

                <div className="consult-button">
                    <button>Book Now</button>
                </div>
            </div>
        </>
    )
}