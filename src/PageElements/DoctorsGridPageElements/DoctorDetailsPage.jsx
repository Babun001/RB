import { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { VscWatch } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { RiSpeakFill } from "react-icons/ri";

import AwardsCarousel from "./AwardCarousal";
import AvailabilityCarousel from "./AvailabilityCarousel";
import './DoctorsGridPageCss/DoctorDetailsPage.css';

export default function DoctorDetailsPage({ doctor, onClose }) {
    const [activeTab, setActiveTab] = useState("Doctor Bio");
    const [showFullBio, setShowFullBio] = useState(false);

    const detailsTabs = ["Doctor Bio", "Experience", "Availability", "Awards", "Rating"];

    const ratingsData = [
        { stars: 5, feedbackCount: 0 },
        { stars: 4, feedbackCount: 0 },
        { stars: 3, feedbackCount: 0 },
        { stars: 2, feedbackCount: 0 },
        { stars: 1, feedbackCount: 0 },
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case "Doctor Bio":
                
                const bioWords = doctor.bio?.split(" ") || [];
                const shouldTruncate = bioWords.length > 30;
                const displayedBio = showFullBio ? doctor.bio : bioWords.slice(0, 30).join(" ") + "...";

                return (
                    <div className="doctorDetailsPara">
                        <p className="doctorBio">{displayedBio}</p>
                        {shouldTruncate && (
                            <button
                                className="readMoreBtn"
                                onClick={() => setShowFullBio(!showFullBio)}
                                style={{
                                    background: "none",
                                    color: "#0CA798",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                    fontWeight: "bold",
                                    display:"flex",
                                    justifyContent:"center"
                                }}
                            >
                                {showFullBio ? "Read Less" : "Read More"}
                            </button>
                        )}
                        <br />
                        <strong>Training</strong>
                        <p className="doctorBio">{doctor.bio}</p>
                    </div>
                );

            case "Experience":
                return (
                    <div className="doctorExperienceSection">
                        {doctor.experienceDetails?.map((exp, index) => (
                            <div key={index} className="experienceCard">
                                <img src={exp.logo} alt={exp.hospital} />
                                <div className="expHeader">
                                    <div>
                                        <h2 className="expHeadLine">{exp.hospital}</h2>
                                        <div className="experienceParaDiv">
                                            <p>{exp.department ? `${exp.department} • ` : ""}{exp.location}</p>
                                            <p>{exp.duration} ({exp.total})</p>
                                            <p className="expDescription">{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case "Availability":
                return (
                    <div className="availabilitySection">
                        <AvailabilityCarousel />
                    </div>
                );
            case "Awards":
                return (
                    <div className="awardsSection">
                        <AwardsCarousel awards={doctor.Awards} />
                    </div>
                );
            case "Rating":
                return (
                    <div className="ratingCountSection">
                        {ratingsData.map((rating, index) => (
                            <div key={index} className="ratingRow">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < rating.stars ? "star filled" : "star"}
                                        />
                                    ))}
                                    <span className="count">({rating.feedbackCount})</span>
                                </div>
                                <div className="feedbackCount">{rating.feedbackCount} Feedbacks</div>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const fullStars = parseInt(doctor.rating);
    const halfStar = doctor.rating - fullStars >= 0.5;
    const maxStars = 5;

    return (
        <div className="modal-overlay">
            <div className="modal-content doctorDetailsPageContainer">
                <button className="close-modal-btn" onClick={onClose}><IoMdClose size={24} /></button>

                {/* Upper Section */}
                <div className="doctorDetailsPageUpperSection">
                    <img src={doctor.imageUrl} alt={doctor.name} className="doctorImage" />

                    <div className="doctorDetailsUpperMiddleSection">
                        <h1 className="doctorName">
                            {doctor.name} <span className="verifiedTick"><MdVerified /></span>
                        </h1>

                        <div className="ratingSection">
                            <span className="stars">
                                {[...Array(fullStars)].map((_, i) => (
                                    <FaStar key={`full-${i}`} color="#0ca798" />
                                ))}
                                {halfStar && <FaStarHalfAlt color="#0ca798" />}
                                {[...Array(maxStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
                                    <FaRegStar key={`empty-${i}`} color="#ccc" />
                                ))}
                            </span>
                            <p>{doctor.rating}<a href="#reviews">{doctor.reviews} Reviews</a></p>
                        </div>

                        <div className="doctorHighlights">
                            <p><FaStethoscope /> {doctor.specialty}</p>
                            <p >
                                <TbStarsFilled /> {doctor.experience} Yrs Exp.</p>
                            <p><CiLocationOn /> {doctor.location}</p>
                            <p style={{ fontSize: "1.3rem", fontWeight: 'bold' }}>
                                <BsCashCoin /> <span style={{ fontSize: "1.3rem", color: "#0CA798" }}>₹{doctor.fees}/-</span> Consultant Fee</p>
                        </div>
                    </div>
                    <div className="doctorDetailsUpperRightSection">
                        <div className="doctorDetailsUpperRightText">
                            <div className="iconWithText">
                                <div className="texticonCircle"><VscWatch size="1.5rem" /></div>
                                <p className="availableText">{doctor.availableDays?.join(", ")}</p>
                            </div>
                            <div className="iconWithText">
                                <div className="texticonCircle"><RiSpeakFill size="1.5rem" /></div>
                                <p className="availableText">{doctor.languages?.join(", ")}</p>
                            </div>
                        </div>

                        <div className="doctorDetailsUpperButton">
                            <p className="doctorPhone"><FaPhone /> {doctor.contact}</p>
                            <button className="bookAppointmentBtn">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="doctorDetailsTabs">
                    {detailsTabs.map((tab) => (
                        <button
                            key={tab}
                            className={`doctorTabButton ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="doctorTabContent">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}
