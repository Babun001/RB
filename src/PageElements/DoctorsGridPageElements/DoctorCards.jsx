
import './DoctorsGridPageCss/DoctorCard.css';
import { FaStar, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { LuBookText } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorCard(params) {


    // console.log("params: ", params)

    const [Liked, setLiked] = useState(false);
    const [available, setAvailable] = useState(true);

    useEffect(() => {
        setAvailable(params.availability);

    },[params.availability])

    const handleLikedBtn = (e) => {
        e.preventDefault();
        setLiked(prev => !prev)
    }

    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate(`#`);
        // navigate(`/doctors-grid/${params.id}`);
    };


    return (
        <div className="doctor-card">
            <div className="rating-badge">
                <FaStar /> {parseFloat(params.rating).toFixed(1)}
            </div>
            <div className="favorite-icon" onClick={handleLikedBtn}>
                <FaHeart size={22} style={{ color: Liked ? "red" : "white" }} />
            </div>
            <div className="doctorsImgSec">
                <img src={params.imageUrl} alt={params.name} className="doctor-image" />
            </div>
            <div className="doctor-info">
                <div className="specialityAndAvailability">
                    <div className="specialty">{params.specialty}</div>
                    <span className="status-dot" style={{ backgroundColor: !available ? '#FFEDE9' : '', color: !available ? "#FF0000" : "" }}><LuDot />{available ? "Available" : "Unavailable"}</span>
                </div>
                <div className="doctor-name-status">
                    <span className="doctor-name">{params.name}</span>
                    {/* <span className="status-dot"><LuDot/>{params.availability}</span> */}
                </div>
                <div className="location">
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
    );
}
