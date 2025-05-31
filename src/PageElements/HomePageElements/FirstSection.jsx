// import { Phone, Mail } from 'lucide-react';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import doctorImage from '../../Assets/background01.png';
import './HomePageCss/FirstSection.css';

const FirstSection = () => {
    return (
        <>
            <div
                className="container"
                style={{
                    backgroundImage: `url(${doctorImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '2rem',
                    borderRadius: '1rem',
                }}
            >
                <div className="hero-overlay">
                    <div className="hero-left">
                        <span className="hero-tag">The industry's standard dummy</span>
                        <h1 className="hero-title">Bringing heartfelt care to your doorstep</h1>
                    </div>

                    <div className="hero-bottom">
                        <div className="hero-subtext">
                            Consult top doctors <span role="img" aria-label="medal">🏅</span> Online Health
                        </div>
                        <div className="hero-float-icons">
                            <div className="icon-circle">
                                <FaPhone title='Phone' size={25} />
                            </div>
                            <div className="icon-circle">
                                <IoMdMail title="Mail" size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstSection;
