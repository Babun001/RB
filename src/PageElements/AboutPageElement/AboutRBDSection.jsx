import AnimatedText from "../../AnimatedText";
import abt1 from '../../Assets/abt1.jpg';
import abt2 from '../../Assets/abt2.jpg';
import abt3 from '../../Assets/abt3.jpg';

import './AboutPageElementCss/AboutRBDSection.css';
import { IoCall } from "react-icons/io5";


export default function AboutRBDSection() {
    return (
        <>
            <div className="AboutRBDContainer">

                <div className="aboutRBDLeftSection">
                    <div className="leftAboutImgSec">
                        <img src={abt1} alt="img1" />
                        <img src={abt2} alt="img2" />
                    </div>
                    <div className="rightAboutImgSec">
                        <div className="aboutExpSec" >
                            <p>Over 15+ Years Experience</p>
                        </div>
                        <img src={abt3} alt="img3" />
                    </div>
                </div>
                <div className="whscRightSection aboutRBDRightSection">
                    <span className="rb-headingTag">About</span>
                    <AnimatedText tag="h2" type="chars" y={30} className='rb-title'>
                        Setting New Standards <br />in Diagnostic Excellence
                    </AnimatedText>
                    <div className="whscMiddleText">
                        <p>RB Diagnostic is a leading name in healthcare diagnostics, committed to delivering accurate, timely, and affordable testing services. Since our inception, we’ve built a reputation for trust and quality with our state-of-the-art laboratories, NABL accreditation, and highly skilled medical professionals. With multiple centres across Kolkata and a strong focus on patient-centric care, we offer a wide spectrum of diagnostic tests — from routine screenings to advanced pathology. Our goal is to empower better health decisions through reliable reports, expert guidance, and seamless service experiences. </p>
                    </div>
                    <div className="whscLowerText">
                        <h4>Need Emergency?</h4>
                        <div className="helpPhoneDiv">
                            <span><IoCall color="white" size={32} /></span>
                            <p>033 4085 4085</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}