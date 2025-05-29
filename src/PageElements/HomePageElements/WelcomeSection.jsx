import { FaCalendarCheck, FaFileAlt, FaVials, FaMapMarkerAlt } from 'react-icons/fa';
import './HomePageCss/WelcomeSection.css';
import { MdChevronRight } from "react-icons/md"
const WelcomeSection = () => {

    return (
        <div className="WelcomeContainer">
            <div className="leftWelcomeSection">
                <h2>Welcome to RB Diagnostics</h2>
                <p className="RBIntro">
                    At RB Diagnostic, we welcome you to a world of precise diagnostics and patient-first care,
                    where advanced technology and trusted expertise come together for your well-being.
                </p>

                <div className="leftBottomWelcomeSection">
                    <div className="cardUpSection">
                        <div className="cardsSection" style={{ backgroundColor: "#e0f7fa" }}>

                            <div className="cardUpperSection">
                                <span className="iconCircle">
                                    <FaCalendarCheck style={{ color: "#003588" }} />
                                </span>
                                <MdChevronRight style={{ color: "black", fontWeight: "700", fontSize: "2rem" }} />
                            </div>

                            <h4>Book an Appointment</h4>
                            <p>Schedule your diagnostic tests effortlessly with our easy online booking system</p>
                        </div>
                        <div className="cardsSection" style={{ backgroundColor: "#fce4ec" }}>

                            <div className="cardUpperSection">
                                <div className="iconCircle">
                                    <FaVials style={{ color: "#003588" }} />
                                </div>
                                <MdChevronRight style={{ color: "black", fontWeight: "700", fontSize: "2rem" }} />
                            </div>



                            <h4>Home Collection</h4>
                            <p>Our home collection services ensure accurate sample collection and timely reporting</p>
                        </div>
                    </div>
                    <div className="cardUpSection">

                        <div className="cardsSection" style={{ backgroundColor: "#fff3e0" }}>


                            <div className="cardUpperSection">
                                <div className="iconCircle">
                                    <FaFileAlt style={{ color: "#003588" }} />
                                </div>
                                <MdChevronRight style={{ color: "black", fontWeight: "700", fontSize: "2rem" }} />
                            </div>


                            <h4>View Report</h4>
                            <p>Access your medical reports securely anytime from our online portal</p>
                        </div>
                        <div className="cardsSection" style={{ backgroundColor: "#ede7f6" }}>



                            <div className="cardUpperSection">
                                <div className="iconCircle">
                                    <FaMapMarkerAlt style={{ color: "#003588" }} />
                                </div>
                                <MdChevronRight style={{ color: "black", fontWeight: "700", fontSize: "2rem" }} />
                            </div>

                            <h4>Locate a Centre Nearby</h4>
                            <p>Easily find the nearest RB Diagnostic centre for quick service</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="rightWelcomeSection">
                <h3>Need Help? Get in touch with us</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your name" required />
                    <input type="tel"
                        placeholder="Phone number"
                        pattern="\d{10}"
                        title="Phone number must be exactly 10 digits"
                        required />
                    <input type="email"
                        placeholder="Email address"
                        required />
                    <textarea placeholder="Query" rows="4"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default WelcomeSection;
