import './HomePageCss/ConsultSection.css';
import docImg from '../../Assets/DoctorAndCircle.png';

export default function ConsultSection() {
    return (
        <>
            <div className="consult-section">
                <div className="consult-image">
                    <img src={docImg} alt="Consultation" />
                </div>

                <div className="consult-text">
                    <h2>Consult with Our Doctor</h2>
                    <p>Get profeddional medical guidance and follow-up support from our experienced doctors, anytime you need.</p>
                    <div className="subText">
                        <h4>Contact Us</h4>
                        <p style={{lineHeight:"5px"}}>+91 XXXXXXXXXX</p>
                        <p style={{lineHeight:"5px"}}>+91 XXXXXXXXXX</p>
                    </div>

                </div>

                <div className="consult-button">
                    <button>Book Appointment</button>
                </div>
            </div>
        </>
    )
}