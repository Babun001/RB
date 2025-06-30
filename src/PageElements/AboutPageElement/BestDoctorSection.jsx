import BestDoctorsList from '../../DB/BestDoctorsList.jsx';
import AnimatedText from '../../AnimatedText.jsx';
import DoctorCard from '../DoctorsGridPageElements/DoctorCards.jsx';
import './AboutPageElementCss/BestDocTSection.css';

export default function BestDoctSection() {
    return (
        <div className="bestDoctSection">
            <div className="packageUpperSection">
                <h4 className="rb-headingTag pk-tag">Best Doctors</h4>
                <AnimatedText tag="h2" type="chars" y={30} className="rb-title pk-title">
                    Experts Behind Your Health
                </AnimatedText>
            </div>
            <div className="doctors-card-sections">
                {BestDoctorsList.map((doc, idx) => (
                    // console.log({...doc})
                    <DoctorCard key={doc.id || idx} {...doc} />
                ))}
            </div>
        </div>
    );
}
