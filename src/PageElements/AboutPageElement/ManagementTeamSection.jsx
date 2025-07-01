import AnimatedText from "../../AnimatedText";
import './AboutPageElementCss/ManagementTeam.css';
import experts from "../../DB/ManagementTeamExpt";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

export default function ManagementTeamSection() {
    return (
        <>
            <div className="managementSection">
                <div className="packageUpperSection">
                    <h4 className="rb-headingTag pk-tag">Our Management Team</h4>
                    <AnimatedText tag="h2" type="chars" y={30} className="rb-title pk-title">
                        Meet the People <br /> Behind Our Progress
                    </AnimatedText>
                </div>
                <div className="experts-section">
                    <div className="experts-grid">
                        {experts.map((expert, index) => (
                            <div
                                key={expert.id}
                                className={`expert-card ${index % 2 === 1 ? 'with-bg' : ''}`}
                            >
                                <div
                                    className="expert-image"
                                    style={{ backgroundImage: `url(${expert.image})` }}
                                ></div>
                                <div className="expert-info">
                                    <h3>{expert.name}</h3>
                                    <p className="role">{expert.role}</p>
                                    <div className="social-icons">
                                        <a href={expert.linkedin} target="_blank" rel="noreferrer">
                                            <BsLinkedin color="blue"/>
                                        </a>
                                        <a href={expert.facebook} target="_blank" rel="noreferrer">
                                            <ImFacebook2 color="blue"/>
                                        </a>
                                    </div>
                                    <a href="#" className="profile-link">View Profile</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}