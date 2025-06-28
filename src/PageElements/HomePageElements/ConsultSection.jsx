import './HomePageCss/ConsultSection.css';
import docImg from '../../Assets/DoctorAndCircle.png';
import AnimatedText from '../../AnimatedText';

export default function ConsultSection() {
    return (
        <>
            <div className="consult-section">
                <div className="consult-image">
                    <img src={docImg} alt="Consultation" />
                </div>

                <div className="consult-text">
                    <AnimatedText tag="h2" type="chars" y={30}>
                        Consult with Our Doctor
                    </AnimatedText>

                    <AnimatedText tag="p" type="words" y={-20}>
                        Get professional medical guidance and follow-up support from our experienced doctors, anytime you need.
                    </AnimatedText>

                    <div className="subText">
                        <h4>Contact Us</h4>
                        <p style={{ lineHeight: "5px" }}>033-4085 4085</p>
                        <p style={{ lineHeight: "5px" }}>033-3382 3382</p>
                    </div>

                </div>

                <div className="consult-button">
                    <button className='rbdButton'><span className='btn-text'>Book Appointment</span></button>
                </div>
            </div>
        </>
    )
}