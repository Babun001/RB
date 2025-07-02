import './DoctorsGridPageCss/DoctorCard.css';
import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { LuBookText, LuDot } from "react-icons/lu";
import { useEffect, useState } from 'react';
import DoctorDetailsPage from './DoctorDetailsPage';
import defaultImg from '../../Assets/defaultImg.png'
import { BsHospitalFill } from "react-icons/bs";

export default function DoctorCard(params) {
    const [liked, setLiked] = useState(false);
    const [available, setAvailable] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setAvailable(params.availability);
    }, [params.availability]);

    const handleLikedBtn = (e) => {
        e.stopPropagation();
        setLiked(prev => !prev);
    };

    const handleBookNow = (e) => {
        e.stopPropagation();
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="doctor-card" onClick={handleBookNow}>
                <div className="rating-badge">
                    <FaStar /> {parseFloat(params.rating).toFixed(1)}
                </div>

                <div className="experience-badge-opd">
                    {params.experience}+ yrs
                </div>


                <div className="doctorsImgSec">
                    <img src={params.imageUrl || defaultImg} alt={params.name} className="doctor-image" />
                </div>

                <div className="doctor-info" >
                    <div className="specialityAndAvailability">
                        <div className="specialty">{params.specialty}</div>
                        <span
                            className="status-dot"
                            style={{
                                backgroundColor: !available ? '#FFEDE9' : '',
                                color: !available ? "#FF0000" : ""
                            }}
                        >
                            <LuDot />
                            {available ? "Available" : "Unavailable"}
                        </span>
                    </div>

                    <div className="doctor-name-status">
                        <span className="doctor-name">{params.name}</span>
                    </div>


                    <div className="location" style={{fontSize:"13px"}}>
                        <BsHospitalFill /> {params.degree}
                    </div>

                    <div className="location" style={{marginTop:"0.3rem"}}>
                        <FaMapMarkerAlt /> {params.location}
                    </div>
                    

                    <hr />

                    <div className="consultationFees">
                        <p>Consultation Fees</p>
                    </div>

                    <div className="fees-book">
                        <div className="fees">₹{params.fees}</div>
                        <button className="book-btn" onClick={handleBookNow}>
                            <LuBookText size={18} /> Book Now
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <DoctorDetailsPage doctor={params} onClose={handleCloseModal} />
            )}
        </>
    );
}
