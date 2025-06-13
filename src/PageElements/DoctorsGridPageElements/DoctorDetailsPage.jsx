import doctors from "../../DB/DoctorsDetails";
import { useParams } from "react-router-dom";
import './DoctorsGridPageCss/DoctorDetailsPage.css';

export default function DoctorDetailsPage(){
    const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) return <h2>Doctor not found</h2>;

  return (
    <div className="doctor-details-wrapper">
      <div className="top-section">
        <img src={doctor.imageUrl} alt={doctor.name} className="doctor-img" />
        <div className="doctor-info">
          <h1>{doctor.name} <span className="verified">✔</span></h1>
          <p className="available">{doctor.available ? "• Available" : "• Unavailable"}</p>
          <p>🩺 {doctor.specialty}</p>
          <p>📅 {doctor.experience}</p>
          <p>📍 {doctor.location}</p>
          <p>💰 ₹{doctor.fees}/- Consultant Fee</p>
          <p>📞 {doctor.contact}</p>
          <p>📆 {doctor.availableDays}</p>
          <p>⭐ {doctor.rating} <span className="reviews">({doctor.reviews} Reviews)</span></p>
          <button className="book-btn">BOOK APPOINTMENT</button>
        </div>
      </div>

      <div className="tab-section">
        <button className="tab active">Doctor Bio</button>
        <button className="tab">Experience</button>
        <button className="tab">Availability</button>
        <button className="tab">Awards</button>
        <button className="tab">Rating</button>
      </div>

      <div className="experience-section">
        {doctor.experienceDetails.map((exp, idx) => (
          <div className="experience-card" key={idx}>
            <h3>{exp.hospital}</h3>
            <p>{exp.department && `${exp.department} • `}{exp.location}</p>
            <p>{exp.duration} &nbsp; <strong>{exp.total}</strong></p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}