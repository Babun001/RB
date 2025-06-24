// import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../../Assets/aboutImage.png';
import './HomePageCss/AboutSection.css'
const AboutSection = () => {
    return (
        <>
            {/* <section className="about-section"> */}
            <div className="about-container">
                <div className="about-left">
                    <div className="main-img">
                        <img src={img1} alt="Doctor and Patient" className="image-bg" />
                        <div className="experience-badge">
                            <svg viewBox="0 0 200 200" className="circular-text">
                                <defs>
                                    <path
                                        id="topTextPath"
                                        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                                    />
                                </defs>

                                <text fontSize="22" fill="#333" fontWeight="500">
                                    <textPath
                                        href="#topTextPath"
                                        startOffset="50%"
                                        textAnchor="middle"
                                        side="left"
                                    >
                                        years of experience years of experience
                                    </textPath>
                                </text>

                                <text x="100" y="110" textAnchor="middle" fontSize="40" fontWeight="bold" fill="black">
                                    50+
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <span className="rb-headingTag">About US</span>
                    <h2 className="title">Explore Tests by Organ for Smarter Health Screening</h2>
                    <p className="description">
                        At RB Diagnostic, we offer an extensive range of tests covering all major health parameters. From routine screenings to advanced diagnostics, our tests are designed to deliver accurate results with the highest precision—empowering you and your doctor to make informed health decisions at every step.
                    </p>
                    <div className="about-right-buttom">
                        <ul className="features">
                            <li>
                                <h3>NABL Accredited Labs</h3>
                                <br />
                                Ensuring the highest standards in testing accuracy and reliability across all diagnostic services.
                            </li>
                            <li>
                                <h3>Home Collection</h3>
                                <br />
                                Enjoy hassle-free sample collection services from the comfort of your home.
                            </li>
                            <li>
                                <h3>Fast Reports</h3>
                                <br />
                                Receive accurate and timely diagnostic reports to support quicker decisions.
                            </li>
                        </ul>

                        <button className="read-more-btn">Read More</button>
                    </div>
                </div>

            </div>
            {/* </section> */}
        </>
    )
}

export default AboutSection;