
import './DoctorsGridPageCss/DoctorCard.css';
import { FaStar, FaHeart, FaMapMarkerAlt, FaRegCalendarCheck } from 'react-icons/fa';

export default function DoctorCard({
    name = "Dr. A K Jain",
    specialty = "Diabetologist",
    location = "SaltLake",
    availability = "Available",
    rating = 5.0,
    fees = 700,
    imageUrl = "https://via.placeholder.com/300x200?text=Doctor+Image"
}) {
    return (
        <div className="doctor-card">
            <div className="rating-badge">
                <FaStar /> {rating}
            </div>
            <div className="favorite-icon">
                <FaHeart />
            </div>
            <img src={imageUrl} alt={name} className="doctor-image" />
            <div className="doctor-info">
                <div className="specialty">{specialty}</div>
                <div className="doctor-name-status">
                    <span className="doctor-name">{name}</span>
                    <span className="status-dot">{availability}</span>
                </div>
                <div className="location">
                    <FaMapMarkerAlt /> {location}
                </div>
                <hr />
                <div className="fees-book">
                    <div className="fees">₹{fees}</div>
                    <button className="book-btn">
                        <FaRegCalendarCheck /> Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
