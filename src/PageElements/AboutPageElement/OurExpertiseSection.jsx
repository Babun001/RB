import AnimatedText from "../../AnimatedText";
import './AboutPageElementCss/OurExpertiseSec.css';


import { FaUserDoctor } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";
import { GiDna2 } from "react-icons/gi";
import { FaHospital } from "react-icons/fa";




const features = [
    {
        icon: FaUserDoctor,
        color: "#0E6EBB",
        bgColor: "#D4E3EF",
        title: 'NABL-Accredited Labs',
        description: 'Our laboratories are accredited by NABL, ensuring consistent adherence to the highest standards of testing quality, precision, and reliability.',
    },
    {
        icon: Ri24HoursFill,
        color: "#22AD7F",
        bgColor: "#DBEDE7",
        title: 'Skilled Medical Team',
        description: 'Our team comprises experienced doctors, pathologists, and technicians who bring clinical expertise and careful attention to every diagnostic process.',
    },
    {
        icon: GiDna2,
        color: "#794934",
        bgColor: "#F3E3DC",
        title: 'State-of-the-Art Equipment',
        description: 'We utilize cutting-edge diagnostic machines and digital systems that support a wide range of tests with enhanced speed and accuracy.',
    },
    {
        icon: FaHospital,
        color: "#4E4696",
        bgColor: "#DAD7F5",
        title: 'Extensive Centre Network',
        description: 'With strategically located centres across Kolkata, we ensure that trusted diagnostic services are always within your reach.',
    },
];

export default function OurExpertiseSection() {
    return (
        <>
            <div className="ourExpSection">
                <div className="packageUpperSection">
                    <h4 className="rb-headingTag pk-tag">Our Expertise</h4>
                    <AnimatedText tag="h2" type="chars" y={30} className="rb-title pk-title">
                        Trusted Diagnostic Care <br /> Backed by Experience and Precision
                    </AnimatedText>

                    <div className="ourExpSecPara">
                        <AnimatedText tag="p" type="words" y={-20} className="RBIntro">
                            With a strong foundation in clinical accuracy and patient trust, RB Diagnostic stands out for its diagnostic excellence. <br />
                            Our expertise spans across diverse test categories, combining modern technology, expert professionals, and efficient processes to deliver reliable results every time.
                        </AnimatedText>
                    </div>

                </div>
                <div className="expertise-cards">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div className="expertise-card" key={index}>
                                <div
                                    className="icon-wrapper"
                                    style={{ backgroundColor: feature.bgColor }}
                                >
                                    <Icon size={28} color={feature.color} />
                                </div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </>
    )
}